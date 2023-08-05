from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


#  status - created, pending, confirmed, completed, canceled
STATUS_CHOICES = [
    ("created" , "Created"),
    ("pending" , "Pending"),
    ("confirmed" , "Confirmed"),
    ("completed" , "Completed"),
    ("canceled" , "Canceled"),
]

# class type - economy, sedan, SUV, luxury
CLASS_TYPE_CHOICES = [
    ("economy" , "Economy"),
    ("sedan" , "Sedan"),
    ("suv" , "SUV"),
    ("luxury" , "Luxury"),
]


class Bookings(models.Model):

    driver = models.ForeignKey(User, on_delete=models.CASCADE)
    passenger = models.ForeignKey(User, on_delete=models.CASCADE)

    numebr_of_passenger = models.IntegerField(default=1)
    scheduled_date = models.DateTimeField()
    status = models.CharField(choices=STATUS_CHOICES, default=STATUS_CHOICES[0][0])
    class_type = models.CharField(choices=CLASS_TYPE_CHOICES, default=CLASS_TYPE_CHOICES[0][0])
    additional_comment = models.TextField()

    pickup_location = models.CharField(max_length=150)
    drop_location = models.CharField(max_length=150)
    estimated_fair = models.FloatField()
    final_fair = models.FloatField()
    estimated_distance = models.FloatField()
    final_distance = models.FloatField()

    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(default=timezone.now)


    def __str__(self):
        return f"booked {self.scheduled_date}"
