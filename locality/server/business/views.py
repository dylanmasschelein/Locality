from django.shortcuts import render
from rest_framework import viewsets, generics
from .serializers import BusinessSerializer
from .models import Business
from rest_framework.response import Response
from rest_framework.views import APIView


class BusinessViewSet(viewsets.ModelViewSet):
    http_method_names = ['get', 'post', 'put', 'delete']
    serializer_class = BusinessSerializer
    queryset = Business.objects.all()
    print(queryset)


class BusinessQuery(generics.ListAPIView):
    http_method_names = ['get']

    @classmethod
    def get_extra_actions(cls):
        return []

    def get(self, request):
        business_type = request.query_params.get('type')
        queryset = Business.objects.all().filter(
            business_type=business_type)
        serializer = BusinessSerializer(queryset, many=True)

        return Response(serializer.data)
