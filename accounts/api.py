from rest_framework import generics
from accounts.serializer import MyTokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from accounts.models import UserProfile, Business
from .serializer import UserProfileSerializer, BusinessSerializer
from rest_framework.permissions import AllowAny


class MyTokenObtainPairView(TokenObtainPairView):
    queryset = UserProfile.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = MyTokenObtainPairSerializer


class UserRegisterView(generics.CreateAPIView):
    queryset = UserProfile.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = UserProfileSerializer


class BusinessSerializer(generics.CreateAPIView):
    queryset = Business.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = BusinessSerializer
