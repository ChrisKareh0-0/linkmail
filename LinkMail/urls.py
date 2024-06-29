# LinkMail/urls.py
from django.contrib import admin
from django.urls import path, include
from django.shortcuts import redirect

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', lambda request: redirect('email-list', permanent=False)),
    path('emails/', include('linkmailBackend.urls')),
]
