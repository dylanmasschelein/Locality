from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractUser, User
from django.db import models

# Create your models here.


# class UserProfile(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     type = models.CharField(max_length=100)


# class UserProfile(AbstractUser):
#     dylan = models.CharField(_('Name of User'), blank=True, max_length=225)

#     class Types(models.TextChoices):
#         CLIENT = 'CLIENT', 'client'
#         SERVICE_PROVIDER = 'SERVICE_PROVIDER', 'service_provider'

#     type = models.CharField(_('Type'), max_length=50,
#                             choices=Types.choices, default=Types.CLIENT)

#     name = models.CharField(_('Name of User'), blank=True, max_length=225)


# class ClientManager(models.Manager):
#     def get_queryset(self, *args, **kwargs):
#         return super().get_queryset(*args, **kwargs).filter(type=User.Types.CLIENT)


# class ServiceProviderManager(models.Manager):
#     def get_queryset(self, *args, **kwargs):
#         return super().get_queryset(*args, **kwargs).filter(type=User.Types.CLIENT)


# class Client(User):
#     objects = ClientManager()

#     class Meta:
#         proxy = True

#     def save(self, *args, **kwargs):
#         if not self.pk:
#             self.type = User.Types.CLIENT
#         return super().save(*args, **kwargs)


# class ServiceProvider(User):
#     objects = ServiceProviderManager()

#     class Meta:
#         proxy = True

#     def save(self, *args, **kwargs):
#         if not self.pk:
#             self.type = User.Types.SERVICE_PROVIDER
#         return super().save(*args, **kwargs)


# class User(AbstractUser):
#     USER_TYPE_CHOICES = (
#         (1, 'client'),
#         (2, 'service_provider'),
#         (3, 'admin'),
#     )

#     user_type = models.PositiveSmallIntegerField(choices=USER_TYPE_CHOICES)


# class Client(models.Model):
#     user = models.OneToOneField(
#         User, on_delete=models.CASCADE, primary_key=True)
#     client = models.CharField(max_length=20)

# class User(AbstractUser):
#     is_admin = models.BooleanField(default=False)
#     is_customer = models.BooleanField(default=False)
#     is_service_provider = models.BooleanField(default=False)


class User(AbstractUser):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    password = models.CharField(max_length=200)
    password2 = models.CharField(max_length=200)
    location = models.CharField(max_length=50)


class Customer(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, primary_key=True)
    status = models.CharField(max_length=20)


class Business(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, primary_key=True)
    business_name = models.CharField(max_length=100)
    legal_name = models.CharField(max_length=100)
    business_license_number = models.IntegerField()
    business_type = models.CharField(max_length=50)


class ServiceProvider(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    business = models.ForeignKey(Business, on_delete=models.CASCADE)


class Admin(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, primary_key=True)
    admin = models.CharField(max_length=20)
