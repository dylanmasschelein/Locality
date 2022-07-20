from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from accounts.models import UserProfile, Business


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['email'] = user.email
        # ...
        return token


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'


class BusinessSerializer(serializers.ModelSerializer):
    class Meta:
        model = Business
        fields = '__all__'
