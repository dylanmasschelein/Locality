from django.shortcuts import render
from rest_framework import viewsets
from .serializers import BusinessSerializer
from .models import Business
from rest_framework.response import Response


class BusinessViewSet(viewsets.ModelViewSet):
    http_method_names = ['get', 'post']
    serializer_class = BusinessSerializer
    queryset = Business.objects.all()
