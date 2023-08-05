from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import ugettext_lazy as _

from users.managers import UserManager


# User related models
USER_TYPE_CHOICES = [
    ('passenger', 'Passenger'),
    ('driver', 'Driver')
]


class User(AbstractUser):

    phone = models.CharField(max_length=12, blank=True)
    home_address = models.TextField(blank=True)
    image = models.ImageField(blank=True, null=True, default="images/users/default-user.png", upload_to='images/users')
    user_type = models.CharField(choices=USER_TYPE_CHOICES, default=USER_TYPE_CHOICES[0][0])

    USERNAME_FIELD = 'phone'
    REQUIRED_FIELDS = []

    objects = UserManager()

    class Meta:
        verbose_name_plural = 'Users'

    def __str__(self):
        return self.phone


# Passenger related models
class Passenger(models.Model):

    user = models.OneToOneField(User, related_name='passenger_user', on_delete=models.CASCADE)


    class Meta:
        verbose_name_plural = 'Passenger'

    def __str__(self):
        return self.user.phone


# Driver related models
class Driver(models.Model):

    user = models.OneToOneField(User, related_name='driver_user', on_delete=models.CASCADE)


    class Meta:
        verbose_name_plural = 'Driver'

    def __str__(self):
        return self.user.phone