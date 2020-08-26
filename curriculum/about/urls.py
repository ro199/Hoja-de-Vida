from rest_framework import routers
from .api import AboutViewSet, ProgrammingLanguageViewSet

router = routers.DefaultRouter()
router.register('api/about', AboutViewSet, 'abouts')
router.register('api/programmingLanguage',
                ProgrammingLanguageViewSet, 'programing')

urlpatterns = router.urls
