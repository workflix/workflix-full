from django.shortcuts import render
from rest_framework import viewsets
from workflix_app_venv.serializer import ServicioSerializer
from .serializer import ProvinciaSerializer
from .serializer import CiudadSerializer
from .serializer import ProfesionSerializer
from .serializer import Usuario_ProfesionalSerializer
from workflix_app_venv.models import Servicio
from .models import Provincia
from .models import Ciudad
from .models import Profesion
from .models import Usuario_Profesional


# Create your views here.

class ServicioViewSet(viewsets.ModelViewSet):
    queryset = Servicio.objects.all()
    serializer_class = ServicioSerializer

class ProvinciaViewSet(viewsets.ModelViewSet):
    queryset = Provincia.objects.all()
    serializer_class = ProvinciaSerializer

class CiudadViewSet(viewsets.ModelViewSet):
    queryset = Ciudad.objects.all()
    serializer_class = CiudadSerializer

class ProfesionViewSet(viewsets.ModelViewSet):
    queryset = Profesion.objects.all()
    serializer_class = ProfesionSerializer

class Usuario_ProfesionalViewSet(viewsets.ModelViewSet):
    queryset = Usuario_Profesional.objects.all()
    serializer_class = Usuario_ProfesionalSerializer