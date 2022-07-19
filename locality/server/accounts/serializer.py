from accounts.models import User, Customer, Business, ServiceProvider
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['email'] = user.email
        # ...
        return token


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    confirm_password = serializers.CharField(write_only=True, required=True)

    def validate(self, attrs):
        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."})

        return attrs

    class CustomerSerializer(serializers.ModelSerializer):
        class Meta:
            model = Customer
            fields = '__all__'

        def create(self, validated_data):
            user = Customer.objects.create(
                first_name=validated_data['first_name'],
                last_name=validated_data['last_name'],
                location=validated_data['location'],
                status='customer',
                email=validated_data['email'],
            )

            user.set_password(validated_data['password'])
            user.save()

            return user

    class ServiceProviderSerializer(serializers.ModelSerializer):
        class Meta:
            model = ServiceProvider
            fields = '__all__'

        def create(self, validated_data):
            user = ServiceProvider.objects.create(
                first_name=validated_data['first_name'],
                last_name=validated_data['last_name'],
                location=validated_data['location'],
                status='customer',
                email=validated_data['email'],
            )

            user.set_password(validated_data['password'])
            user.save()

            return user

    class BusinessSerializer(serializers.ModelSerializer):
        class Meta:
            model = Business
            fields = '__all__'

        def create(self, validated_data):
            business = Business.object.create(
                business_name=validated_data['business_name'],
                legal_name=validated_data['legal_name'],
                business_license=validated_data['business_license'],
                business_type=validated_data['business_type']
            )

            business.save()

            return business


# from accounts.models import User, Customer, Business, ServiceProvider
# from django.contrib.auth.password_validation import validate_password
# from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
# from rest_framework import serializers
# from rest_framework.validators import UniqueValidator
# from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


# class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
#     @classmethod
#     def get_token(cls, user):
#         token = super().get_token(user)
#         # Add custom claims
#         token['email'] = user.email
#         # ...
#         return token


# class RegisterSerializer(serializers.ModelSerializer):
#     password = serializers.CharField(
#         write_only=True, required=True, validators=[validate_password])
#     password2 = serializers.CharField(write_only=True, required=True)

#     class Meta:
#         model = Customer
#         fields = '__all__'

#     def validate(self, attrs):
#         if attrs['password'] != attrs['password2']:
#             raise serializers.ValidationError(
#                 {"password": "Password fields didn't match."})

#         return attrs

#     def create(self, validated_data):
#         user = User.objects.create(
#             first_name=validated_data['first_name'],
#             last_name=validated_data['last_name'],
#             location=validated_data['location'],
#             status='customer',
#             email=validated_data['email'],
#         )

#         user.set_password(validated_data['password'])
#         user.save()

#         return user
