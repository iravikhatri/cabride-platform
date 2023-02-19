from django.urls import path, include
from django.conf.urls import url
from . import views

urlpatterns = [
    path('', views.home, name="booking-home"),
    path('pastrides/', views.past_rides, name="booking-past_rides"),
    path('cabsnearby/', views.cabs_nearby, name="booking-cabs_nearby"),
    url(r'^create-booking/$', views.create_booking, name='create-booking'),
]
