from django.shortcuts import render, redirect
from .models import Bookings
from .forms import CabRideSearch

def home(request):
    context = {}
    if request.method == "POST":
        form = CabRideSearch(request.POST)
        if form.is_valid():
            search_leaving_from = form.cleaned_data.get('search_leaving_from')
            search_going_to = form.cleaned_data.get('search_going_to')
            available_rides = [
                { 'leaving_from': search_leaving_from, 'going_to': search_going_to, 'total_distance': 100.3, 'ride_fair': 200, 'cabs_driver': 'Jaspreet Singh' },
                { 'leaving_from': search_leaving_from, 'going_to': search_going_to, 'total_distance': 100.3, 'ride_fair': 250, 'cabs_driver': 'Nivin Aggarwal' },
                { 'leaving_from': search_leaving_from, 'going_to': search_going_to, 'total_distance': 100.3, 'ride_fair': 230, 'cabs_driver': 'JP Kolhi' },
                { 'leaving_from': search_leaving_from, 'going_to': search_going_to, 'total_distance': 100.3, 'ride_fair': 300, 'cabs_driver': 'Balvinder Singh' },
                { 'leaving_from': search_leaving_from, 'going_to': search_going_to, 'total_distance': 100.3, 'ride_fair': 280, 'cabs_driver': 'Arun Verma' },
            ]
            form = CabRideSearch()
            context.update({
                'available_rides': available_rides,
                'form': form
            })
    else:
        form = CabRideSearch()
        context.update({
            'form': form
        })
    return render(request, 'booking/home.html', context)

def create_booking(request):
    if request.method == "POST":
        data = request.POST.get('content').split('-')
        booking = Bookings.objects.create(
            leaving_from=data[0],
            going_to=data[1],
            total_distance=float(data[2].split(' ')[0]),
            ride_fair=float(data[3].split(' ')[1]),
            cabs_driver=data[4],
        )
        booking.save()
    return redirect('booking-cabs_nearby')

def past_rides(request):
    context = {
        "past_rides": Bookings.objects.all()
    }
    return render(request, 'booking/pastrides.html', context)

def cabs_nearby(request):
    context = {
        "nearby_locations": [
            'Location No 1',
            'Location No 2',
            'Location No 3',
            'Location No 4',
            'Location No 5',
        ]
    }
    return render(request, 'booking/cabsnearby.html', context)
