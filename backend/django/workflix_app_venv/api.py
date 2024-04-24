from rest_framework import viewsets, permissions
from workflix_app_venv.models import Servicio
from .models import Provincia
from .models import Ciudad
from .models import Profesion
from .models import Usuario_Profesional
from workflix_app_venv.serializer import ServicioSerializer
from .serializer import ProvinciaSerializer
from .serializer import CiudadSerializer
from .serializer import ProfesionSerializer
from .serializer import Usuario_ProfesionalSerializer

class ServicioViewSet(viewsets.ModelViewSet):
    queryset = Servicio.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ServicioSerializer

class ProvinciaViewSet(viewsets.ModelViewSet):
    queryset = Provincia.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProvinciaSerializer

class CiudadViewSet(viewsets.ModelViewSet):
    queryset = Ciudad.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CiudadSerializer

class ProfesionViewSet(viewsets.ModelViewSet):
    queryset = Profesion.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProfesionSerializer

class Usuario_ProfesionalViewSet(viewsets.ModelViewSet):
    queryset = Usuario_Profesional.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = Usuario_ProfesionalSerializer