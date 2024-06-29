import imaplib
import email

def fetch_emails(account):
    mail = imaplib.IMAP4_SSL('imap.your-email-provider.com')
    mail.login(account.email, account.password)
    mail.select('inbox')
    
    result, data = mail.search(None, 'ALL')
    email_ids = data[0].split()
    
    emails = []
    for e_id in email_ids:
        result, msg_data = mail.fetch(e_id, '(RFC822)')
        raw_email = msg_data[0][1]
        msg = email.message_from_bytes(raw_email)
        
        email_obj = {
            'subject': msg['subject'],
            'sender': msg['from'],
            'receiver': msg['to'],
            'body': msg.get_payload(decode=True),
            'date_received': msg['date'],
        }
        emails.append(email_obj)
    
    return emails
