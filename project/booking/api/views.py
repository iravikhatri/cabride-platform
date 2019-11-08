from rest_framework.views import APIView
from rest_framework.response import Response

from booking.api.serializers import BookingsSerializer
from booking.models import Bookings

class BookingsApiView(APIView):

    serializers_class = BookingsSerializer

    def get(self, request):
        search_leaving_from = self.request.query_params.get('from')
        search_going_to = self.request.query_params.get('to')

        if search_leaving_from and search_going_to:
            data = {
                'available_rides': [
                    { 'leaving_from': search_leaving_from, 'going_to': search_going_to, 'total_distance': 100.3, 'ride_fair': 200, 'cabs_driver': 'Jaspreet Singh' },
                    { 'leaving_from': search_leaving_from, 'going_to': search_going_to, 'total_distance': 100.3, 'ride_fair': 250, 'cabs_driver': 'Nivin Aggarwal' },
                    { 'leaving_from': search_leaving_from, 'going_to': search_going_to, 'total_distance': 100.3, 'ride_fair': 230, 'cabs_driver': 'JP Kolhi' },
                    { 'leaving_from': search_leaving_from, 'going_to': search_going_to, 'total_distance': 100.3, 'ride_fair': 300, 'cabs_driver': 'Balvinder Singh' },
                    { 'leaving_from': search_leaving_from, 'going_to': search_going_to, 'total_distance': 100.3, 'ride_fair': 280, 'cabs_driver': 'Arun Verma' },
                ]
            }
        else:
            bookings = Bookings.objects.all()
            serializer = BookingsSerializer(bookings, many=True)
            data = serializer.data

        return Response(data)


    def post(self, request):
        serializer = self.serializers_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"success": "booking is created successfully"})
        else:
            return Response(serializer.errors)


class NearByCabsApiView(APIView):

    def get(self, request):

        data = {
            "nearby_locations": [
                'Location No 1',
                'Location No 2',
                'Location No 3',
                'Location No 4',
                'Location No 5',
            ]
        }

        return Response(data)
