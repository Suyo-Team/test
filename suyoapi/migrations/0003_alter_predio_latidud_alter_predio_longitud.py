# Generated by Django 4.0.1 on 2022-01-22 15:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('suyoapi', '0002_alter_propietario_options_remove_predio_coordenadas_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='predio',
            name='latidud',
            field=models.DecimalField(decimal_places=10, max_digits=12),
        ),
        migrations.AlterField(
            model_name='predio',
            name='longitud',
            field=models.DecimalField(decimal_places=10, max_digits=12),
        ),
    ]
