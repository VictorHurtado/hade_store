# Generated by Django 3.0.7 on 2020-06-27 14:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='img',
            field=models.TextField(default='Image no available'),
        ),
    ]
