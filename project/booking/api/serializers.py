from rest_framework import serializers
from booking.models import Bookings

class BookingsSerializer(serializers.ModelSerializer):

	class Meta:
		model = Bookings
		fields = ['leaving_from', 'going_to','total_distance',
			'ride_fair','ride_booked_date','cabs_driver']
