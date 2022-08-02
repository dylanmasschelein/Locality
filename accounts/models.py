from distutils.command.upload import upload
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.base_user import BaseUserManager


def upload_path(instance, filename):
    return '/'.join(['images', str(instance.last_name), filename])


class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError('Users require an email field')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, **extra_fields)


class UserProfile(AbstractUser):
    username = None
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(_('email address'), unique=True)
    password = models.CharField(max_length=200)
    password2 = models.CharField(max_length=200)
    city = models.CharField(max_length=200, blank=True, null=True)
    photo = models.ImageField(blank=True, null=True, upload_to=upload_path)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

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
    business_image = models.ImageField(
        blank=True, null=True, upload_to=upload_path)
