from rest_framework import serializers
from .models import Servicio
from .models import Provincia
from .models import Ciudad
from .models import Profesion
from .models import Usuario_Profesional

class ServicioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Servicio
        fields = ('id',
                'nombre',
                'descripcion')

class ProvinciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Provincia
        fields = ('id',
                'nombre_provincia')

class CiudadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ciudad
        fields = ('id',
                'nombre_ciudad',
                'provincia')

class ProfesionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profesion
        fields = ('id',
                'nombre_Profesion',
                'descripcion')

class Usuario_ProfesionalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario_Profesional
        fields = ('id_Usuario_Profesional', 
                  'nombres', 'apellido', 
                  'email', 'password', 
                  'foto_perfil', 
                  'telefono', 
                  'descripcion', 
                  'calificacion_obtenida', 
                  'ciudad_id', 
                  'rol_id', 
                  'profesion_id')