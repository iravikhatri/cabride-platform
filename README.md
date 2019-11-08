# CabRide
A most convenient place to book your ride.

## API Features

1) Check rides for locations A to B with fiar.
2) See all past bookings.
3) See all locations nearby you.

## How to use API

call base url like

http://localhost/api or  http://127.0.0.1:8000/api

### Check rides

To call api use base url with endpoint

Complete url with endpoint: http://localhost/api/booking

It also takes 2 arguments 'from' and 'to' with endpoint

?from=value&to=value

Example:

If you want to book ludhiana to chandigarh

then from will be ludhiana and to will be chandigarh

The complete url will be like

http://localhost/api/booking?from=ludhiana&to=chandigarh

### See past booking

To call api use base url with endpoint

Complete url with endpoint: http://localhost/api/booking

Example:

The complete url will be like

http://localhost/api/booking

It will return all booking of past in json format

### See cabs nearby

To call api use base url with endpoint

Complete url with endpoint: http://localhost/api/cabsnearby

Example:

The complete url will be like

http://localhost/api/cabsnearby

It will return all cabs locations nearby you in json format
