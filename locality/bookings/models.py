from tkinter import CASCADE
from django.db import models

# Create your models here.


class Bookings(models.Model):
    # service_provider_id = models.ForeignKey(
    #     'Service_Provider', on_delete=models.CASCADE)
    # client_id = models.ForeignKey('Client', on_delete=models.CASCADE)
    time_requested = models.DateField()
    time_slotted = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
