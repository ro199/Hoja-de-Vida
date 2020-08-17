from django.db import models
from profile.models import Profile

# Create your models here.


def upload_path(instance, filename):
    return '/'.join(['course', str(instance.first_name), filename])


class Certificate(models.Model):
    course_name = models.CharField(max_length=200)
    institution_name = models.CharField(max_length=200)
    start_date = models.DateField(auto_now=False, auto_now_add=False)
    end_date = models.DateField(auto_now=False, auto_now_add=False)
    city = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    source_course = models.ImageField(
        blank=True, null=True, upload_to=upload_path)
    certificates = models.ForeignKey(Profile, on_delete=models.CASCADE)
