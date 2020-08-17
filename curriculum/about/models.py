from django.db import models

# Create your models here.


class ProgrammingLanguage(models.Model):
    programming_language_name = models.CharField(max_length=50)
    description = models.CharField(max_length=500)


class About(models.Model):
    user_name = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    programming_language = models.ManyToManyField(
        ProgrammingLanguage, blank=True, null=True)
