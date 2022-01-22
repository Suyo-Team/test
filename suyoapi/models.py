from django.db import models


class Propietario(models.Model):
    nombres = models.CharField(max_length=50)
    apellidos = models.CharField(max_length=100)

    class Meta:
        ordering = ['nombres']

    def __str__(self):
        return f'{self.nombres} {self.apellidos}'


class Predio(models.Model):
    propietario = models.ForeignKey(Propietario, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=40)
    direccion = models.CharField(max_length=80, blank=True, null=True)
    latidud = models.DecimalField(max_digits=19, decimal_places=7)
    longitud = models.DecimalField(max_digits=19, decimal_places=7)

    def __str__(self):
        return f'{self.nombre} - {self.propietario}'
