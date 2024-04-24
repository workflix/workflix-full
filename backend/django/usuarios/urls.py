from django.urls import path, include
from . import views
from django.contrib.auth.views import LoginView
from rest_framework import routers, viewsets
from .views import (LoginView, LogoutView, 
                    SignupView, UsuarioViewSet,)

router = routers.DefaultRouter()
router.register('usuarios', UsuarioViewSet)



urlpatterns = [
    path('', include(router.urls)),
    path('auth/login/', LoginView.as_view(), name='auth_login'),
    path('auth/logout/', LogoutView.as_view(), name='auth_logout'),
    path('auth/signup/', SignupView.as_view(), name='auth_signup'),

]
