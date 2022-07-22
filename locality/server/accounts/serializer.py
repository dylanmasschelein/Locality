from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from accounts.models import UserProfile, Business
from django.contrib.auth.hashers import make_password
from django.contrib.auth.password_validation import validate_password


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        print(user)
        token = super().get_token(user)
        # Add custom claims
        token['email'] = user.email
        # ...

        return str(token)


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'

    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."})
        return attrs

    def create(self, validated_data):
        print(validated_data)
        user = UserProfile(
            first_name=validated_data["first_name"],
            last_name=validated_data["last_name"],
            city=validated_data["city"],
            is_customer=validated_data["is_customer"],
            is_sp=validated_data["is_sp"],
            is_admin=validated_data["is_admin"],
            email=validated_data["email"],
            username=validated_data["username"]
        )
        user.set_password(validated_data["password"])
        user.save()
        return user

    # def validate_password(self, value):
    #     if len(value) < 8 or len(value) > 30:
    #         raise serializers.ValidationError(
    #             'Password length must be between 8 and 30.')
    #     return value


class BusinessSerializer(serializers.ModelSerializer):
    class Meta:
        model = Business
        fields = '__all__'
