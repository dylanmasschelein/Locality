from django.db.models.signals import post_save
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.contrib.auth.models import Group
import logging

from .models import CustomerProfile, ServiceProviderProfile

logger = logging.getLogger('mylogger')


# @receiver(post_save, sender=User)
# def create_customer_profile(sender, instance, created, **kwargs):
#     if created:
#         CustomerProfile.objects.create(user=instance)

    # group = Group.objects.get(name='customer')
    # instance.groups.add(group)
    # User.Objects.create(
    #     user=instance,
    #     name=instance.username
    # )


# @receiver(post_save, sender=User)
# def save_customer_profile(sender, instance, **kwargs):
#     instance.profile.save()

