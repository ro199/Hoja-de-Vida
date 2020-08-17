from rest_framework import viewsets, permissions
from .serializers import AboutSerializer, ProgrammingLanguageSerializer
from .models import About, ProgrammingLanguage


class AboutViewSet(viewsets.ModelViewSet):
    queryset = About.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]

    serializer_class = AboutSerializer


class ProgrammingLanguageViewSet(viewsets.ModelViewSet):
    queryset = ProgrammingLanguage.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]

    serializer_class = ProgrammingLanguageSerializer
