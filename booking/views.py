from rest_framework.views import APIView
from rest_framework.response import Response

from booking.serializers import BookingSerializer
from booking.models import Bookings


class BookingCreateAPIView(APIView):

    serializers_class = BookingSerializer

    def get(self, request):
        bookings = Bookings.objects.all()
        serializer = self.serializers_class(bookings, many=True)
        data = serializer.data

        return Response(data)


    def post(self, request):
        serializer = self.serializers_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"success": "booking is created successfully"})
        else:
            return Response(serializer.errors)


