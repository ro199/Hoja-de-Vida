from .models import Education, PersonalReference, Profile, Project, Skill
from rest_framework import viewsets, permissions
from .serializers import EducationSerializer, PersonalReferenceSerializer, ProfileSerializer, ProjectSerializer, SkillSerializer


class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]

    serializer_class = EducationSerializer


class PersonalReferenceViewSet(viewsets.ModelViewSet):
    queryset = PersonalReference.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]

    serializer_class = PersonalReferenceSerializer


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    permissions_classes = [
        permissions.AllowAny

    ]

    serializer_class = ProfileSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]

    serializer_class = ProjectSerializer


class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]

    serializer_class = SkillSerializer
