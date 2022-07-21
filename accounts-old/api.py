from accounts.models import User, CustomerProfile, Business, ServiceProviderProfile
from accounts.serializer import MyTokenObtainPairSerializer
from rest_framework import viewsets, permissions
from .serializer import RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics


from rest_framework.permissions import AllowAny, IsAuthenticated


# Bookings Viewset


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class CustomerRegisterView(generics.CreateAPIView):
    queryset = CustomerProfile.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer.CustomerSerializer


class ServiceProviderRegisterView(generics.CreateAPIView):
    queryset = ServiceProviderProfile.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer.ServiceProviderSerializer


class BusinessSerializer(generics.CreateAPIView):
    queryset = Business.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer.BusinessSerializer
