# Generated by Django 4.0.1 on 2022-01-21 18:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('propertys', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='property',
            name='owner',
            field=models.CharField(max_length=100),
        ),
    ]
