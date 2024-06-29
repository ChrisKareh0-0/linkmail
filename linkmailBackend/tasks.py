from .models import EmailAccount, Email
from .utils import fetch_emails

def store_emails():
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
