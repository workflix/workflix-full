#from django.urls import path, include
#from rest_framework import routers
#from workflix_app_venv import views

#router = routers.DefaultRouter()
#router.register(r'servicios',views.ServicioViewSet)
#urlpatterns = [
#    path('', include(router.urls)),
#]
from django.urls import path
from django.contrib.auth.views import LoginView
from rest_framework import routers
from .api import ServicioViewSet
from .api import ProvinciaViewSet
from .api import CiudadViewSet
from .api import ProfesionViewSet
from .api import Usuario_ProfesionalViewSet


router = routers.DefaultRouter()
router.register('api/servicios', ServicioViewSet, 'servicios')
router.register('api/provincias', ProvinciaViewSet, 'provincias')
router.register('api/ciudades', CiudadViewSet, 'ciudades')
router.register('api/profesiones', ProfesionViewSet, 'profesiones')
router.register('api/usuario_profesional', Usuario_ProfesionalViewSet, 'usuarios_profesionales')



urlpatterns = router.urls
