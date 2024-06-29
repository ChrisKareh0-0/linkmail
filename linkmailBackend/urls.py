# linkmailBackend/urls.py
from django.urls import path
from .views import email_list, test_email_fetch

urlpatterns = [
    path('', email_list, name='email-list'),
    path('test-fetch-emails/', test_email_fetch, name='test-fetch-emails'),
]
