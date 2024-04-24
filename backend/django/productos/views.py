from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from usuarios.models import Usuario
from .serialaizer import VentaSerializer
from .models import Venta
from django.utils import timezone
from rest_framework.request import Request
from .models import Carrito, Seleccion, Articulo
from .serialaizer import SeleccionSerializer


class Compras(APIView):

    permission_classes = [IsAuthenticated]

    def _obtener_usuario(self, pk) -> Usuario:
        try:
            return Usuario.objects.get(pk=pk)
        except Usuario.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        cliente = self._obtener_usuario(pk)
        ventas = Venta.objects.filter(carrito__cliente=cliente)
        serializer = VentaSerializer(instance=ventas, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    


class UnCarrito(APIView):
    permission_classes = [IsAuthenticated]

    def _obtener_objecto(self, pk) -> Carrito:
        try:
            return Carrito.objects.get(pk=pk)
        except Carrito.DoesNotExist:
            raise Http404

    def _obtener_articulo(self, pk) -> Articulo:
        try:
            return Articulo.objects.get(pk=pk)
        except Articulo.DoesNotExist:
            raise Http404

    def _obtener_seleccion(self, carrito, articulo) -> Seleccion:
        seleccion = Seleccion.objects.filter(carrito=carrito, articulo=articulo).first()
        if seleccion is None:
            seleccion = Seleccion.objects.create(carrito=carrito, articulo=articulo, cantidad=0)

        return seleccion

    def get(self, request: Request, pk, format=None):
        carrito = self._obtener_objecto(pk)
        selecciones = Seleccion.objects.filter(carrito=carrito)
        serializer = SeleccionSerializer(instance=selecciones, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request: Request, pk, format=None):
        carrito = self._obtener_objecto(pk)
        articulo_id = request.data.get("articulo")
        cantidad = int(request.data.get("cantidad"))

        articulo = self._obtener_articulo(articulo_id)
        if cantidad > 0 and articulo.cantidad < cantidad:
            return Response(False, status=status.HTTP_400_BAD_REQUEST)

        seleccion = self._obtener_seleccion(carrito, articulo)
        if cantidad < 0 and seleccion.cantidad < -cantidad:
            return Response(False, status=status.HTTP_400_BAD_REQUEST)

        seleccion.cantidad += cantidad
        seleccion.save()

        articulo.cantidad -= cantidad
        articulo.save()

        return Response(True, status=status.HTTP_200_OK)


class Carritos(APIView):
    permission_classes = [IsAuthenticated]

    def _crear_carrito(self, cliente: Usuario):
        fecha = timezone.now()
        carrito = Carrito.objects.create(cliente=cliente, fecha=fecha, comprado=False)
        carrito.save()
        return carrito

    def _borrar_carrito_existente(self, cliente: Usuario):
        try:
            carrito = Carrito.objects.get(cliente=cliente, comprado=False)
            if carrito:
                carrito.delete()
        except Exception:
            pass

    def post(self, request: Request, format=None):
        usuario = Usuario.objects.get(username=request.data.get("usuario"))
        if usuario is None:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        self._borrar_carrito_existente(usuario)
        carrito = self._crear_carrito(usuario)
        return Response(carrito.id, status=status.HTTP_200_OK)
