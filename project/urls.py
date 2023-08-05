from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path("admin/", admin.site.urls),

    # REACT TEMPLATE
    path("", TemplateView.as_view(template_name="index.html")),

    # REST FRAMEWORK PATH
    path("v1/bookings/", include("booking.urls")),
]
