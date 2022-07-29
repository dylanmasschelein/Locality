from django.db import models
from user.models import User


def upload_path(instance, filename):
    return '/'.join(['images', str(instance.business_name), filename])


class Business(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, blank=True, null=True)
    business_name = models.CharField(max_length=100)
    legal_name = models.CharField(max_length=100)
    business_number = models.CharField(max_length=100, blank=True, null=True)
    business_type = models.CharField(max_length=50)
    description = models.CharField(max_length=255, blank=True, null=True)
    location = models.CharField(max_length=255, blank=True, null=True)
    business_image = models.ImageField(
        blank=True, null=True, upload_to=upload_path)
