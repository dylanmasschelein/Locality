from django.contrib import admin
from accounts.models import Admin, ServiceProviderProfile, User, CustomerProfile, Business

# Register your models here.
admin.site.register(User),
admin.site.register(CustomerProfile),
admin.site.register(ServiceProviderProfile),
admin.site.register(Admin),
admin.site.register(Business),
