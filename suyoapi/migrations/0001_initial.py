# Generated by Django 4.0.1 on 2022-01-20 22:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Coordenada',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('latidud', models.CharField(max_length=10)),
                ('longitud', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='Propietario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombres', models.CharField(max_length=50)),
                ('apellidos', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Predio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=40)),
                ('direccion', models.CharField(max_length=80)),
                ('coordenadas', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='suyoapi.coordenada')),
                ('propietario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='suyoapi.propietario')),
            ],
        ),
    ]
