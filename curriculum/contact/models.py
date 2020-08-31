from django.db import models

# Create your models here.


class Contact(models.Model):
    contact_name = models.CharField(max_length=100)
    conact_email = models.EmailField(max_length=254)
    message = models.CharField(max_length=400)
