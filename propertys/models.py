from django.db import models
from owners.models import Owner

# Create your models here.


class Property(models.Model):
    address = models.CharField(max_length=100)
    owner= models.CharField(max_length=100)
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    longitude = models.DecimalField(max_digits=9, decimal_places=6)

