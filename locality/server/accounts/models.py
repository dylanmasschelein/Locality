from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class UserProfile(AbstractUser):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=255, unique=True)
    password = models.CharField(max_length=200)
    password2 = models.CharField(max_length=200)
    city = models.CharField(max_length=200, blank=True, null=True)
    is_customer = models.BooleanField(default=False)
    is_sp = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.first_name


class Business(models.Model):
    user = models.ForeignKey(
        UserProfile, on_delete=models.CASCADE, blank=True, null=True)
    business_name = models.CharField(max_length=100)
    legal_name = models.CharField(max_length=100)
    business_number = models.CharField(max_length=100, blank=True, null=True)
    business_type = models.CharField(max_length=50)
    description = models.CharField(max_length=255, blank=True, null=True)
    location = models.CharField(max_length=255, blank=True, null=True)