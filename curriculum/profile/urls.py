from rest_framework import routers
from .api import EducationViewSet, PersonalReferenceViewSet, ProfileViewSet, ProjectViewSet, SkillViewSet

router = routers.DefaultRouter()
router.register('api/skill', SkillViewSet, 'skills')
router.register('api/profile', ProfileViewSet, 'profiles')
router.register('api/project', ProjectViewSet, 'projects')
router.register('api/personalReference', PersonalReferenceViewSet, 'personals')
router.register('api/education', EducationViewSet, 'educations')

urlpatterns = router.urls
