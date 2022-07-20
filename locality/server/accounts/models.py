from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class UserProfile(AbstractUser):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=255, unique=True)
    password = models.CharField(max_length=200)
    password2 = models.CharField(max_length=200)
    is_customer = models.BooleanField(default=False)
    is_sp = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']


class Business(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    business_name = models.CharField(max_length=100)
    legal_name = models.CharField(max_length=100)
    business_license_number = models.IntegerField()
    business_type = models.CharField(max_length=50)
