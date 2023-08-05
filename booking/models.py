from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

from common.constants import CLASS_TYPE_CHOICES, STATUS_CHOICES


class Bookings(models.Model):

    driver = models.ForeignKey(User, related_name="driver", on_delete=models.CASCADE)
    passenger = models.ForeignKey(User, related_name="passenger", on_delete=models.CASCADE)

    number_of_passenger = models.IntegerField(default=1)
    scheduled_at = models.DateTimeField()
    status = models.CharField(max_length=32, choices=STATUS_CHOICES, default=STATUS_CHOICES[0][0])
    class_type = models.CharField(max_length=32, choices=CLASS_TYPE_CHOICES, default=CLASS_TYPE_CHOICES[0][0])
    additional_comment = models.TextField()

    pickup_location = models.CharField(max_length=150)
    drop_off_location = models.CharField(max_length=150)
    estimated_fair = models.FloatField()
    final_fair = models.FloatField()
    estimated_distance = models.FloatField()
    final_distance = models.FloatField()

    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(default=timezone.now)


    def __str__(self):
        return f"booked {self.scheduled_date}"
