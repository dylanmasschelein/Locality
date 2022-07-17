from calendar import leapdays
from rest_framework import serializers
from bookings.models import Bookings


class BookingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bookings
        fields = '__all__'
