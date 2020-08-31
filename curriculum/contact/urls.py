from django.urls import path
from rest_framework import routers
from .api import ContactSendEmail

router = routers.DefaultRouter()
router.register('api/contact', ContactSendEmail, 'contacts')

urlpatterns = router.urls
