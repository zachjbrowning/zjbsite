# Generated by Django 3.0.4 on 2020-05-02 05:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='message',
            field=models.CharField(max_length=2000, unique=True),
        ),
    ]