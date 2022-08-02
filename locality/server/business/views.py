from django.shortcuts import render
from rest_framework import viewsets, generics, status
from .serializers import BusinessSerializer
from .models import Business
from rest_framework.response import Response
from rest_framework.views import APIView


class BusinessViewSet(viewsets.ModelViewSet):
    http_method_names = ['get', 'post', 'put', 'delete']
    serializer_class = BusinessSerializer
    queryset = Business.objects.all()


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


class BusinessGet(generics.ListAPIView):
    http_method_names = ['get']

    @classmethod
    def get_extra_actions(cls):
        return []

    def get_business_by_pk(self, pk):
        try:
            return Business.objects.get(user_id=pk)
        except:
            return Response({
                'error': "Business does not exists",
            }, status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        business = self.get_business_by_pk(pk)
        serializer = BusinessSerializer(business)
        return Response(serializer.data)
