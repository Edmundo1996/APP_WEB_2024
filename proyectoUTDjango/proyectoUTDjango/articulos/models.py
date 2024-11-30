from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Category(models.Model):
    name=models.CharField(max_length=100,verbose_name='Nombre')
    descripcion=models.CharField(max_length=250,verbose_name='Desccripcion')
    created=models.DateTimeField(auto_now_add=True,verbose_name='Creado el')
    updated_at=models.DateTimeField(auto_now=True,verbose_name='Creado el')

class Meta:
    verbose_name="Categoria"
    verbose_name_plural="Categorias"

def __str__(self):
    return self.name

class Article(models.Model):
    title=models.CharField(max_length=150,verbose_name='Titulo')
