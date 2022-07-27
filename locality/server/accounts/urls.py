from django.urls import path
from . import views
from accounts.api import MyTokenObtainPairView

from rest_framework_simplejwt.views import (
    TokenRefreshView, TokenObtainPairView
)


urlpatterns = [
    path('customer/', views.CreateCustomer.as_view(), name='create_user'),
    path('customer/list', views.CustomerList.as_view(), name='get_users'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('business/', views.CreateBusiness.as_view(), name='create_business'),
    path('businesses/', views.BusinessList.as_view(), name='get_business'),
    path('businesses/', views.BusinessList.as_view(), name='get_business'),
    path('business_image/', views.BusinessImageDetails.as_view(),
         name='business_image'),
]
