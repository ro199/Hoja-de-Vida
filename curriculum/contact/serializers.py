from rest_framework import serializers
from .models import Contact
from django.core.mail import send_mail


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['contact_name', 'conact_email', 'message']

    def create(self, validate_data):
        instance = super(ContactSerializer, self).create(validate_data)
        name = instance.contact_name
        email = instance.conact_email
        message = instance.message
        send_mail(
            'Correo enviado desde {}'.format(email),
            'El usuario {}'.format(
                name) + ' quiere comunicarse contigo para una oferta de trabajo \n'
            + 'y te deja el siguiente mensaje. \n' +
            'DATA: {}'.format(message),
            email,
            ['ro199_fr@hotmail.com'],
            fail_silently=False,
        )
        return instance
