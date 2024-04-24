from django.contrib.auth import authenticate, login, logout
from django.utils import timezone
from rest_framework import generics, status
from rest_framework.serializers import ValidationError
from rest_framework.request import Request
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.token_blacklist.models import OutstandingToken, BlacklistedToken
from rest_framework.permissions import AllowAny
from .serializer import UsuarioSerializer, RegistroSerializer
from .models import Usuario
from productos.models import Carrito

from .common import crear_respuesta
from rest_framework import routers, viewsets


class SignupView(generics.CreateAPIView):
    permission_classes = [AllowAny]

    queryset = Usuario.objects.all()
    serializer_class = RegistroSerializer

    def create(self, request: Request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            try:
                self.perform_create(serializer)
                return crear_respuesta("Usuario registrado exitosamente", serializer.data, status.HTTP_201_CREATED)
            except ValidationError as ex:
                return crear_respuesta(str(ex.detail[0]), status_code=status.HTTP_400_BAD_REQUEST)

        return crear_respuesta("Error registrando usuario", serializer.errors, status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    permission_classes = [AllowAny]

    def _get_carrito(self, cliente):
        try:
            return Carrito.objects.get(cliente=cliente, comprado=False)
        except Carrito.DoesNotExist:
            fecha = timezone.now()
            carrito = Carrito.objects.create(cliente=cliente, fecha=fecha, comprado=False)
            carrito.save()
            return carrito

    def post(self, request: Request):
        username = request.data.get('usuario')
        password = request.data.get('clave')
        user = authenticate(username=username, password=password)

        if user:
            token = RefreshToken.for_user(user)
            access_token = token.access_token
            access_token.set_exp(lifetime=timezone.timedelta(days=1))
            login(request, user)

            usuario = Usuario.objects.get(pk=user.id)
            serializer = UsuarioSerializer(usuario)
            if not user.is_staff:
                carrito = self._get_carrito(user)
                respuesta = crear_respuesta("Inicio de sesión exitoso",
                                            {'carritoActual': carrito.id, 'usuarioActual': serializer.data,
                                             'accessToken': {'acceso': str(access_token), 'refresco': str(token)}},
                                            status.HTTP_200_OK)
            else:
                respuesta = crear_respuesta("Inicio de sesión exitoso",
                                            {'usuarioActual': serializer.data,
                                             'accessToken': {'acceso': str(access_token), 'refresco': str(token)}},
                                            status.HTTP_200_OK)

            respuesta.set_cookie('accessToken', token, httponly=True)
            return respuesta

        return crear_respuesta("Error iniciando sesión", status_code=status.HTTP_404_NOT_FOUND)




class LogoutView(APIView):
    permission_classes = [AllowAny]

    def post(self, request: Request):
        logout(request)
        token: OutstandingToken
        for token in OutstandingToken.objects.filter(user=request.user.id):
            _, _ = BlacklistedToken.objects.get_or_create(token=token)

        return crear_respuesta("Sesión terminada con éxito", status_code=status.HTTP_200_OK)
    
class UsuarioViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

    def update(self, request, *args, **kwargs):
        usuario = self.get_object()

        nueva_direccion = request.data.get('direccion')
        nuevo_email = request.data.get('email')
        nueva_clave = request.data.get('clave')
        nuevo_telefono = request.data.get('telefono')
        nuevas_observaciones = request.data.get('observaciones')

        usuario.direccion = nueva_direccion
        usuario.email = nuevo_email
        usuario.telefono = nuevo_telefono
        usuario.observaciones = nuevas_observaciones
        usuario.set_password(nueva_clave)
        usuario.save()

        serializer = self.get_serializer(usuario)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    