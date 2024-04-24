from django.contrib import admin
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.forms import UserChangeForm
from productos.models import Articulo
from productos.models import TipoArticulo
from productos.models import Envio
from usuarios.models import Usuario
from productos.models import Venta
from productos.models import Seleccion
from productos.models import Carrito


# Register your models here.
class EnvioAdmin(admin.ModelAdmin):
    list_display = ("nombre", "monto")


class TipoArticuloAdmin(admin.ModelAdmin):
    list_display = ["nombre"]


class ArticuloAdmin(admin.ModelAdmin):
    list_display = ("nombre", "descripcion", "precio", "costo", "cantidad", "imagen", "tipo")





class UsuarioAdmin(BaseUserAdmin):
    form = UserChangeForm
    fieldsets = (
        (None, {'fields': ('email', 'password', )}),
        (_('Personal info'), {'fields': ('first_name', 'last_name')}),
        (_('Usuario de Enbalde'), {'fields': ('tipo', 'direccion', 'telefono', 'observaciones')}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
          'classes': ('wide', ),
          'fields': ('username', 'email', 'password1', 'password2', 'direccion', 'tipo'),
        }),
    )
    list_display = ['first_name', 'last_name', 'direccion', 'email', 'observaciones']
    search_fields = ('email', 'first_name', 'last_name')
    ordering = ('first_name', )


class VentaAdmin(admin.ModelAdmin):
    list_display = ("numero", "comprobante", "fecha", "obtener_nombre_cliente", "total", "obtener_nombre_envio")

    @admin.display(ordering='usuario__first_name', description='Cliente')
    def obtener_nombre_cliente(self, obj):
        return obj.carrito.cliente.first_name

    @admin.display(ordering='envio__nombre', description='Envio')
    def obtener_nombre_envio(self, obj):
        return obj.envio.nombre


class SeleccionAdmin(admin.ModelAdmin):
    list_display = ("obtener_nombre_cliente", "cantidad", "obtener_nombre_articulo")

    @admin.display(ordering='carrito__cliente__first_name', description='Cliente')
    def obtener_nombre_cliente(self, obj):
        return obj.carrito.cliente.first_name

    @admin.display(ordering='articulo__nombre', description='Artículo')
    def obtener_nombre_articulo(self, obj):
        return obj.articulo.nombre


class CarritoAdmin(admin.ModelAdmin):
    list_display = ("obtener_nombre_cliente", "fecha")

    @admin.display(ordering='usuario__first_name', description='Cliente')
    def obtener_nombre_cliente(self, obj):
        return obj.cliente.first_name


admin.site.register(Envio, EnvioAdmin)
admin.site.register(TipoArticulo, TipoArticuloAdmin)
admin.site.register(Articulo, ArticuloAdmin)

admin.site.register(Usuario, UsuarioAdmin)
admin.site.register(Venta, VentaAdmin)
admin.site.register(Seleccion, SeleccionAdmin)
admin.site.register(Carrito, CarritoAdmin)
