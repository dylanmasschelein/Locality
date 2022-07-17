from rest_framework import routers
from .api import BookingsViewSet

router = routers.DefaultRouter()
router.register('api/bookings', BookingsViewSet, 'bookings')

urlpatterns = router.urls