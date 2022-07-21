from django.shortcuts import render
# from locality.server.accounts import serializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import serializers
from django.http import JsonResponse
from accounts.serializer import MyTokenObtainPairSerializer, RegisterSerializer
from accounts.models import User, CustomerProfile, ServiceProviderProfile, Business
from rest_framework import status
from django.contrib.auth.password_validation import validate_password

from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
import logging


# # Create your views here.
from rest_framework.response import Response
from rest_framework.views import APIView
from accounts.serializer import RegisterSerializer

logger = logging.getLogger('mylogger')


class CustomerList(APIView):
    def get(self, request):
        customerList = CustomerProfile.objects.all()
        serializer = RegisterSerializer.CustomerSerializer(
            customerList, many=True)
        return Response(serializer.data)


# def validate(attrs):
#     if attrs['password'] != attrs['password2']:
#         raise serializers.ValidationError(
#             {"password": "Password fields didn't match."})
#     return attrs


# def createCustomer(request):
#     password = serializers.CharField(
#         write_only=True, required=True, validators=[validate_password])
#     password2 = serializers.CharField(write_only=True, required=True)

#     validate(request.data)
#     if request.method == 'POST':
#         serializer = RegisterSerializer.UserSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)

    # def validate(self, attrs):
    #     if attrs['password'] != attrs['password2']:
    #         raise serializers.ValidationError(
    #             {"password": "Password fields didn't match."})
    #     return attrs

    # def post(self, request):
    #     self.validate(request.data)
    #     serializer = RegisterSerializer.UserSerializer(data=request.data)
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
        self.validate(request.data)
        serializer = RegisterSerializer.UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        # logger.info(user)

        # customer = RegisterSerializer.CustomerSerializer(
        #     data=validated_data)

        # if customer.is_valid():
        #     customer.save()
        # user = User.objects.create(
        #     first_name=validated_data['first_name'],
        #     last_name=validated_data['last_name'],
        #     location=validated_data['location'],
        #     email=validated_data['email'],
        #     username=validated_data['username']
        # )
        # user.set_password(validated_data['password'])
        # user.save()

        # customer = Customer.objects.create(
        #     user_id=user.id,
        #     status='customer'
        # )

        # customer.save()
        # return Response(serializer.data)

        # class BookingCreate(APIView):
        #     def post(self, request):

        #         serializer = BookingsSerializer(data=request.data)
        #         if serializer.is_valid():
        #             serializer.save()
        #             return Response(serializer.data)
        #         else:
        #             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        # class BookingsDetail(APIView):
        #     def get_booking_by_pk(self, pk):
        #         try:
        #             return Bookings.objects.get(pk=pk)
        #         except:
        #             return Response({
        #                 'error': "Booking does not exists",
        #             }, status=status.HTTP_404_NOT_FOUND)

        #     def get(self, request, pk):
        #         booking = self.get_booking_by_pk(pk)
        #         serializer = BookingsSerializer(booking)
        #         return Response(serializer.data)

        #     def put(self, request, pk):
        #         booking = self.get_booking_by_pk(pk)
        #         serializer = BookingsSerializer(booking, data=request.data)
        #         if serializer.is_valid():
        #             serializer.save()
        #             return Response(serializer.data)
        #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        #     def delete(self, request, pk):
        #         booking = self.get_booking_by_pk(pk)
        #         booking.delete()
        #         return Response(status=status.HTTP_204_NO_CONTENT)
