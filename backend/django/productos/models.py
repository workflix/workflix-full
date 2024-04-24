from django.db import models
from django.core.validators import MinValueValidator
from .servicios import TipoArticulo
from decimal import Decimal
from usuarios.common import aceptar_solo_fechas_pasadas
from django.conf import settings
from usuarios.common import aceptar_solo_fechas_futuras





class Articulo(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=200, blank=False)
    descripcion = models.CharField(max_length=200, blank=False)
    precio = models.DecimalField(max_length=10, blank=False, decimal_places=2, max_digits=10,
                                 validators=[MinValueValidator(0.01)])
    costo = models.DecimalField(max_length=10, blank=False, decimal_places=2, max_digits=10, validators=[MinValueValidator(0)])
    imagen = models.ImageField('imagen', upload_to='images', null=True)
    cantidad = models.IntegerField(blank=False, default=0, validators=[MinValueValidator(0)])
   
    tipo = models.ForeignKey(TipoArticulo, to_field="id", on_delete=models.CASCADE)
    

    class Meta:
        db_table = "Articulo"
        verbose_name = "Articulos del negocio"
        verbose_name_plural = "Articulos"

    def __unicode__(self):
        return self.nombre

    def __str__(self):
        return self.nombre





class Carrito(models.Model):
    id = models.AutoField(primary_key=True)
    cliente = models.ForeignKey(settings.AUTH_USER_MODEL, to_field="id", on_delete=models.CASCADE)
    fecha = models.DateTimeField(blank=False, validators=[aceptar_solo_fechas_futuras])
    comprado = models.BooleanField(blank=False, default=False)

    class Meta:
        db_table = "Carrito"
        verbose_name = "Carrito de compra"
        verbose_name_plural = "Carritos"

    def __unicode__(self):
        return u'Carrito de {0}'.format(self.cliente.first_name)

    def __str__(self):
        return 'Carrito de {0}'.format(self.cliente.first_name)



    



class Envio(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=40, blank=False)
    monto = models.DecimalField(max_length=10, blank=False, decimal_places=2, max_digits=10,
                                validators=[MinValueValidator(Decimal('0'))])

    class Meta:
        db_table = "Envio"
        verbose_name = "Tipos de envios disponibles"
        verbose_name_plural = "Envios"

    def __unicode__(self):
        return self.nombre

    def __str__(self):
        return self.nombre

class Venta(models.Model):
    id = models.AutoField(primary_key=True)
    numero = models.PositiveIntegerField(blank=False)
    comprobante = models.PositiveIntegerField(blank=False)
    fecha = models.DateTimeField(blank=False, validators=[aceptar_solo_fechas_pasadas])
    total = models.DecimalField(max_length=10, blank=False, decimal_places=2, max_digits=10,
                                validators=[MinValueValidator(Decimal('0.01'))])
    envio = models.ForeignKey(Envio, to_field="id", on_delete=models.CASCADE)
    carrito = models.ForeignKey(Carrito, to_field="id", on_delete=models.CASCADE)

    class Meta:
        db_table = "Venta"
        verbose_name = "Listado de Ventas"
        verbose_name_plural = "Ventas"

    def __unicode__(self):
        return u'Venta a {0} por {1} con {2}'.format(self.carrito.cliente.first_name, self.total, self.envio.nombre.lower())

    def __str__(self):
        return 'Venta a {0} por {1} con {2}'.format(self.carrito.cliente.first_name, self.total, self.envio.nombre.lower())



class Seleccion(models.Model):
    id = models.AutoField(primary_key=True)
    cantidad = models.PositiveIntegerField(blank=False, default=1, validators=[MinValueValidator(1)])
    carrito = models.ForeignKey(Carrito, to_field="id", on_delete=models.CASCADE)
    articulo = models.ForeignKey(Articulo, to_field="id", on_delete=models.CASCADE)

    class Meta:
        db_table = "Seleccion"
        verbose_name = "Seleccion de articulos"
        verbose_name_plural = "Selecciones"

    def __unicode__(self):
        return u'{0} dentro de carrito {1} de {2}'.format(self.articulo.nombre, self.carrito.id,
                                                          self.carrito.cliente.first_name)

    def __str__(self):
        return '{0} dentro de carrito {1} de {2}'.format(self.articulo.nombre, self.carrito.id,
                                                         self.carrito.cliente.first_name)
    

