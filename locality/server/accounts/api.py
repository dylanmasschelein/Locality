from accounts.models import User, Customer, Business, ServiceProvider
from rest_framework import viewsets, permissions
from .serializers import RegisterSerializer

# Bookings Viewset


class CustomerRegisterViewSet(viewsets.ModelViewSet):
    queryset = Bookings.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = BookingsSerializer
