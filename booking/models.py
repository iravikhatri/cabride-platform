from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Bookings(models.Model):

    leaving_from = models.CharField(max_length=150)
    going_to = models.CharField(max_length=150)
    total_distance = models.FloatField()
    ride_fair = models.FloatField()
    ride_booked_date = models.DateTimeField(default=timezone.now)
    cabs_driver = models.CharField(max_length=150)
    # cabs_driver = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"booked {self.ride_booked_date}"
