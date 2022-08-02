from django.urls import path, include
from rest_framework.routers import SimpleRouter
from user.views import UserViewSet
from auth.views import LoginViewSet, RegistrationViewSet, RefreshViewSet
from business.views import BusinessViewSet, BusinessQuery, BusinessGet


routes = SimpleRouter()

# AUTHENTICATION
routes.register(r'auth/login', LoginViewSet, basename='auth-login')
routes.register(r'auth/register', RegistrationViewSet,
                basename='auth-register')
routes.register(r'auth/refresh', RefreshViewSet, basename='auth-refresh')

# USER
routes.register(r'user', UserViewSet, basename='user')

# BUSINESS
routes.register(r'business', BusinessViewSet, basename='business')

urlpatterns = [
    *routes.urls,
    path('business/type', BusinessQuery.as_view()),
    path('business/user/<int:pk>', BusinessGet.as_view()),
]
