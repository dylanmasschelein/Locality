from django.urls import path
from . import views
from accounts.api import MyTokenObtainPairView

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('customer/', views.CreateCustomer.as_view(), name='create_user'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # path('register/', views.RegisterView.as_view(), name='auth_register'),
    # path('register/customer/', views.CustomerList.as_view(),
    #      name='auth_register'),
    # path('register/service-provider/',
    #      views.ServiceProviderRegisterView.as_view(), name='auth_register'),
    # path('business/',
    #      views.BusinessSerializer.as_view(), name='business_register'),

    # path('', views.getRoutes)
]
