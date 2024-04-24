from rest_framework import serializers
from usuarios.serializer import UsuarioSerializer
from .models import Carrito, Seleccion, Venta, Envio, TipoArticulo, Articulo, Carrito



class ArticuloSerializer(serializers.ModelSerializer):
    imagen = serializers.ImageField(max_length=None, allow_empty_file=False, use_url=True)

    class Meta:
        model = Articulo
        fields = ['id', 'nombre', 'descripcion', 'precio', 'costo', 'imagen', 'cantidad', 'tipo']


class ArticuloIdSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField()

    class Meta:
        model = Articulo
        fields = ['id']





class CarritoSerializer(serializers.ModelSerializer):
    cliente = UsuarioSerializer()

    class Meta:
        model = Carrito
        fields = ['id', 'cliente', 'fecha']







class VentaSerializer(serializers.ModelSerializer):
    carrito = CarritoSerializer()

    class Meta:
        model = Venta
        fields = ['numero', 'comprobante', 'fecha', 'total', 'envio', 'carrito']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        carrito = representation.pop("carrito")
        cliente = carrito.get("cliente")
        representation.update({"cliente": f"{cliente.get('nombre')} {cliente.get('apellido')}"})

        objeto_carrito = Carrito.objects.get(pk=carrito.get("id"))
        envio = Envio.objects.get(pk=representation['envio'])
        selecciones = Seleccion.objects.filter(carrito=objeto_carrito)

        serializer = SeleccionSerializer(selecciones, many=True)
        representation.update({"selecciones": serializer.data})
        representation.update({"envio": envio.nombre})
        return representation
    
class CarritoSerializer(serializers.ModelSerializer):
    cliente = UsuarioSerializer()

    class Meta:
        model = Carrito
        fields = ['id', 'cliente', 'fecha']

class SeleccionSerializer(serializers.ModelSerializer):
    articulo = ArticuloSerializer()

    class Meta:
        model = Seleccion
        fields = ['id', 'cantidad', 'articulo']

        




class TipoArticuloSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoArticulo
        fields = ['id', 'nombre']
