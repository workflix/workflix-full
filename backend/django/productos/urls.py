from django.utils import timezone
from django.urls import path, include
from django.conf import settings
from django.core.files.storage import default_storage
from rest_framework import routers, viewsets
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from .models import  Articulo, TipoArticulo, Carrito, Seleccion, Venta, Envio
from .serialaizer import ArticuloSerializer, CarritoSerializer, SeleccionSerializer, VentaSerializer, TipoArticuloSerializer
from .views import UnCarrito, Carritos, Compras
from usuarios.common import generar_nombre_unico





class ArticuloViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]

    queryset = Articulo.objects.all()
    serializer_class = ArticuloSerializer

    def update(self, request: Request, *args, **kwargs):
        try:
            articulo_existente = self.get_object()
            articulo_existente.nombre = request.data.get('nombre')
            articulo_existente.descripcion = request.data.get('descripcion')
            articulo_existente.precio = request.data.get('precio')
            articulo_existente.cantidad = request.data.get('cantidad')
            articulo_existente.costo = request.data.get('costo')
            articulo_existente.tipo = TipoArticulo.objects.get(pk=request.data.get('tipo'))

            contenido_imagen = request.FILES.get('imagen')
            if contenido_imagen:
                imagen = generar_nombre_unico(contenido_imagen.name)
                camino = default_storage.save(f"{settings.MEDIA_ROOT}/images/{imagen}", contenido_imagen)
                articulo_existente.imagen = camino

            articulo_existente.save()
            serializer = ArticuloSerializer(articulo_existente)
            return Response(serializer.data, status.HTTP_201_CREATED)

        except Exception:
            return Response(status=status.HTTP_400_BAD_REQUEST)



class TipoArticuloViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = TipoArticulo.objects.all()
    serializer_class = TipoArticuloSerializer


class CarritoViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Carrito.objects.all()
    serializer_class = CarritoSerializer


class SeleccionViewSet(viewsets.ModelViewSet):
    queryset = Seleccion.objects.all()
    serializer_class = SeleccionSerializer





class VentaViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Venta.objects.all()
    serializer_class = VentaSerializer

    def create(self, request: Request, *args, **kwargs):
        try:
            carrito = Carrito.objects.get(pk=int(request.data.get("carrito")))
            envio = Envio.objects.get(pk=int(request.data.get("envio")))
            fecha = timezone.now()
            numero = 1
            comprobante = 1

            ultima_venta = Venta.objects.last()
            if ultima_venta is not None:
                nuevo_comprobante = ultima_venta.comprobante + 1
                comprobante = nuevo_comprobante % 1000
                numero = ultima_venta.numero + (nuevo_comprobante / 1000)

            total = self._calcular_total_de_carrito(carrito) + envio.monto
            venta = Venta(numero=numero, comprobante=comprobante, fecha=fecha, total=total, carrito=carrito, envio=envio)
            venta.save()
            carrito.comprado = True
            carrito.save()
            serializer = VentaSerializer(venta)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception:
            return Response(status=status.HTTP_400_BAD_REQUEST)

    def _calcular_total_de_carrito(self, carrito: Carrito):
        total = 0
        selecciones = Seleccion.objects.filter(carrito=carrito)
        for seleccion in selecciones:
            total += seleccion.articulo.precio * seleccion.cantidad

        return total


router = routers.DefaultRouter()
router.register('tipo_articulos', TipoArticuloViewSet)
router.register('articulos', ArticuloViewSet)
router.register('ventas', VentaViewSet)



urlpatterns = [
    path('', include(router.urls)),    
    path('carritos/<int:pk>', UnCarrito.as_view()),
    path('carritos/', Carritos.as_view()),
    path('compras/<int:pk>', Compras.as_view()),
]
