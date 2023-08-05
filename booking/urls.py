from django.urls import path, include
from booking.views import BookingsApiView, NearByCabsApiView

urlpatterns = [
    path('', BookingsApiView().as_view()),
    path('/<int:pk>', NearByCabsApiView().as_view()),
]
