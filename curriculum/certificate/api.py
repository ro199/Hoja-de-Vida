from rest_framework import viewsets, permissions
from .serializers import CertificateSerializer
from .models import Certificate


class CertificateViewSet(viewsets.ModelViewSet):
    queryset = Certificate.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]

    serializer_class = CertificateSerializer
