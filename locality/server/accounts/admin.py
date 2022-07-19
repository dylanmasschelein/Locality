from django.contrib import admin
from accounts.models import Admin, ServiceProvider, User, Customer, Business

# Register your models here.
admin.site.register(User),
admin.site.register(Customer),
admin.site.register(ServiceProvider),
admin.site.register(Admin),
admin.site.register(Business),
