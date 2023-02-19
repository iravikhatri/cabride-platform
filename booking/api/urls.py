from django.urls import path, include
from booking.api.views import BookingsApiView, NearByCabsApiView

urlpatterns = [
    path('booking/', BookingsApiView().as_view()),
    path('cabsnearby/', NearByCabsApiView().as_view()),
]
