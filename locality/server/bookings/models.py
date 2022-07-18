from tkinter import CASCADE
from django.db import models
from django.contrib.auth.models import User
# Create your models here.


# class ServcieProvider(User):
#     buisness_name = models.CharField(max_length=100)
#     buisess_lisence = models.CharField(max_length=20)
#     buisness_category = models.CharField(max_length=100)
#     location = models.CharField(max_length=100)
#     status = models.CharField(max_length=20)


# class Client(User):
#     status = models.CharField(max_length=20)


class Bookings(models.Model):
    # service_provider_id = models.ForeignKey(
    #     'Service_Provider', on_delete=models.CASCADE)
    time_requested = models.DateField()
    time_slotted = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    # client_id = models.ForeignKey(
    #     Client, related_name='id', on_delete=models.CASCADE)

    # service_provider_id = models.ForeignKey(
    #     ServcieProvider, related_name='id', on_delete=models.CASCADE)
