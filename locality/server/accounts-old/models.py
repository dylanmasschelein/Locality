from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractUser, User
from django.db import models
from django.db.models.signals import post_save
from django.db.models.signals import post_save
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.contrib.auth.models import Group
import logging

# from .models import CustomerProfile, ServiceProviderProfile

# Create your models here.
logger = logging.getLogger('mylogger')


class User(AbstractUser):
    # first_name = models.CharField(max_length=50)
    # last_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=255, unique=True)
    password = models.CharField(max_length=200)
    password2 = models.CharField(max_length=200)
    # set these while passing the bits back per form
    is_customer = models.BooleanField(default=False)
    is_sp = models.BooleanField(default=True)

    # USERNAME_FIELD = 'email'
    # REQUIRED_FIELDS = ['username']


class CustomerProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=50, default=None)
    last_name = models.CharField(max_length=50, default=None)
    # status = models.CharField(max_length=20)


class Business(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    business_name = models.CharField(max_length=100)
    legal_name = models.CharField(max_length=100)
    business_license_number = models.IntegerField()
    business_type = models.CharField(max_length=50)


class ServiceProviderProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    business = models.OneToOneField(Business, on_delete=models.CASCADE)


class Admin(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    admin = models.CharField(max_length=20)


# Recievers
@receiver(post_save, sender=User)
def create_customer_profile(sender, instance, created, **kwargs):
    if created and sender.is_customer:
        CustomerProfile.objects.create(
            user=instance, first_name=instance.first_name, last_name=instance.last_name)
    if created and sender.is_sp:
        # Business.objects.create(user=instance)
        ServiceProviderProfile.objects.create(
            user=instance, first_name=instance.first_name, last_name=instance.last_name)

# @receiver(post_save, sender=User)
# def save_customer_profile(sender, instance, **kwargs):
#     instance.profile.save()

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
