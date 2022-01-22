from django.db import models

from django.db import models
from django.contrib.auth.models import AbstractUser
from ckeditor.fields import RichTextField


class User(AbstractUser):
    email = models.EmailField('email address', unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    city = models.CharField(null=True, max_length=255)

