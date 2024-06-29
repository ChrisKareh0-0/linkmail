from django.db import models

class EmailAccount(models.Model):
    provider_choices = [
        ('GMAIL', 'Gmail'),
        ('OUTLOOK', 'Outlook'),
        ('IMAP', 'IMAP'),
    ]
    email = models.EmailField()
    password = models.CharField(max_length=128)
    provider = models.CharField(max_length=7, choices=provider_choices)

    def __str__(self):
        return self.email

class Email(models.Model):
    account = models.ForeignKey(EmailAccount, on_delete=models.CASCADE, related_name='emails')
    subject = models.CharField(max_length=255)
    sender = models.EmailField()
    receiver = models.EmailField()
    body = models.TextField()
    date_received = models.DateTimeField()
    is_read = models.BooleanField(default=False)

    def __str__(self):
        return self.subject
