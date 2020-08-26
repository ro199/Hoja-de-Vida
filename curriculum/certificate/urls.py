from rest_framework import routers
from .api import CertificateViewSet

route = routers.DefaultRouter()
route.register('api/certificate', CertificateViewSet, 'certificates')

urlpatterns = route.urls
