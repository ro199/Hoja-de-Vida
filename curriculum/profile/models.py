from django.db import models
from phone_field import PhoneField

# Create your models here.


def upload_path(instance, filename):
    return '/'.join(['course', str(instance.full_name), filename])


class Skill(models.Model):
    technical = models.CharField(max_length=50)
    professional = models.CharField(max_length=50)


class Profile(models.Model):
    ci = models.CharField(max_length=10, unique=True)
    full_name = models.CharField(max_length=200)
    photo = models.ImageField(
        blank=True, null=True, upload_to=upload_path, height_field=None, width_field=None, max_length=None)
    email_p = models.EmailField(max_length=100, unique=True)
    email_j = models.EmailField(max_length=100, unique=True)
    phone_number = PhoneField(blank=True, help_text='Contact phone number')
    direction = models.CharField(max_length=200)
    url_linked = models.URLField(max_length=200)
    message = models.CharField(max_length=1000)
    skills = models.ManyToManyField(
        Skill, blank=True, null=True, related_name="profileSkill")


class Project(models.Model):
    name_project = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    profile_project = models.ForeignKey(
        Profile, on_delete=models.CASCADE, related_name="profileProject")


class PersonalReference(models.Model):
    contact_name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    phone_number = PhoneField(blank=True, help_text='Contact phone number')
    email = models.EmailField(max_length=254, unique=True)
    profile_personal_reference = models.ForeignKey(
        Profile, on_delete=models.CASCADE, related_name="profilePersonalReference")


class Education(models.Model):
    school_name = models.CharField(max_length=100)
    start_date = models.DateField(auto_now=False, auto_now_add=False)
    end_date = models.DateField(auto_now=False, auto_now_add=False)
    city = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    diploma = models.CharField(max_length=200)
    profile_Education = models.ForeignKey(
        Profile, on_delete=models.CASCADE, related_name="profileEducation")
