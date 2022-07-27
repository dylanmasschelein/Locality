from django.contrib import admin
from accounts.models import UserProfile, Business, BusinessImage

# Register your models here.
admin.site.register(UserProfile),
admin.site.register(Business),
admin.site.register(BusinessImage),
