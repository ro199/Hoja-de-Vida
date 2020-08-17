from django.contrib import admin
from .models import Profile, Project, Skill, PersonalReference, Education

# Register your models here.
admin.site.register(Profile)
admin.site.register(Project)
admin.site.register(Skill)
admin.site.register(PersonalReference)
admin.site.register(Education)
