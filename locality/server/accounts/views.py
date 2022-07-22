from rest_framework.response import Response
from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from accounts.serializer import UserProfileSerializer, BusinessSerializer
from accounts.models import UserProfile, Business
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework import status
import logging

logger = logging.getLogger('mylogger')


# Create your views here.
class CustomerList(APIView):
    def get(self, request):
        customerList = UserProfile.objects.all()
        serializer = UserProfileSerializer(
            customerList, many=True)
        return Response(serializer.data)


class CreateBusiness(APIView):
    def post(self, request):
     # self.validate(request.data)
        serializer = BusinessSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BusinessList(APIView):
    def get(self, request):
        business_list = Business.objects.all()
        serializer = BusinessSerializer(business_list, many=True)
        return Response(serializer.data)

# class
# @api_view(['POST'])
# def post_new_user(request):
#     print(request.data)
#   # self.validate(request.data)
#     serializer = UserProfileSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data)
#     else:
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CreateCustomer(APIView):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."})
        return attrs

    def post(self, request):
     # self.validate(request.data)
        serializer = UserProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @receiver(post_save, sender=User)
# def create_customer_profile(sender, instance, created, **kwargs):
#     if created and sender.is_customer:
#         CustomerProfile.objects.create(
#             user=instance, first_name=instance.first_name, last_name=instance.last_name)
#     if created and sender.is_sp:
#         # Business.objects.create(user=instance)
#         ServiceProviderProfile.objects.create(
#             user=instance, first_name=instance.first_name, last_name=instance.last_name)
