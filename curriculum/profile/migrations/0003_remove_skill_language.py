# Generated by Django 3.1 on 2020-08-26 20:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('profile', '0002_profile_photo'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='skill',
            name='language',
        ),
    ]
