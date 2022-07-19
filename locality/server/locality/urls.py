from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include("accounts.urls")),
    # path('api-auth/', include('rest_framework.urls')),
    # path('rest-auth/', include('rest_auth.urls')),
    path('bookings/', include('bookings.urls')),
    # path('accounts/', include('django.contrib.auth.urls')),
    # path('api/', include("bookings.urls"))
]
