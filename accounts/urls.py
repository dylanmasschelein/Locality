from django.urls import path
from . import views
from accounts.api import MyTokenObtainPairView

from rest_framework_simplejwt.views import (
    TokenRefreshView, TokenObtainPairView
)


urlpatterns = [
    # Customer
    path('create_customer/', views.CreateCustomer.as_view(), name='create_user'),
    path('customer/<int:pk>/', views.CustomerList.as_view(), name='create_user'),

    # Auth
    path('login/', views.LoginViewSet.as_view(), name='get_business'),
    path('register/', views.RegistrationViewSet.as_view(),
         name='token_obtain_pair'),
    path('refresh/', views.RefreshViewSet.as_view(), name='token_refresh'),

    # Business
    path('business/', views.CreateBusiness.as_view(), name='create_business'),
    path('business/<int:pk>/', views.BusinessDetail.as_view()),
    path('business_list/', views.BusinessList.as_view(), name='get_business'),

]
