# Generated by Django 3.1 on 2020-08-26 20:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profile', '0003_remove_skill_language'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='message',
            field=models.CharField(max_length=1000),
        ),
    ]
