# linkmailBackend/views.py
from django.shortcuts import render
from django.http import HttpResponse
from .models import Email, EmailAccount
from .utils import fetch_emails

def email_list(request):
    emails = Email.objects.all()
    return render(request, 'linkmailBackend/email_list.html', {'emails': emails})

def test_email_fetch(request):
    accounts = EmailAccount.objects.all()
    for account in accounts:
        emails = fetch_emails(account)
        for e in emails:
            Email.objects.create(
                account=account,
                subject=e['subject'],
                sender=e['sender'],
                receiver=e['receiver'],
                body=e['body'],
                date_received=e['date_received']
            )
    return HttpResponse("Emails fetched and stored successfully!")

def homepage(request):
    return HttpResponse("Welcome to the Email Client!")
