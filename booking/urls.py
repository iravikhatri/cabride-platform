from django.urls import path, include
from .views import BookingCreateAPIView

urlpatterns = [
    path('', BookingCreateAPIView().as_view()),
    # path('/<int:pk>', BookingCreateAPIView().as_view()),
]
