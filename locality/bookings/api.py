from bookings.models import Bookings
from rest_framework import viewsets, permissions
from .serializers import BookingsSerializer

# Bookings Viewset


class BookingsViewSet(viewsets.ModelViewSet):
    queryset = Bookings.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = BookingsSerializer
