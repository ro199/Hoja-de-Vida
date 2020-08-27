from django.db import models
from profile.models import Profile

# Create your models here.


class Certificate(models.Model):
    course_name = models.CharField(max_length=200)
    institution_name = models.CharField(max_length=200)
    start_date = models.DateField(auto_now=False, auto_now_add=False)
    end_date = models.DateField(auto_now=False, auto_now_add=False)
    city = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    source_course = models.FileField(
        upload_to="documents", blank=True, null=True)
    certificates = models.ForeignKey(Profile, on_delete=models.CASCADE)
    img = models.ImageField(blank=True, null=True, upload_to="documents")
