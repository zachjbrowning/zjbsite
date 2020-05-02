from django.db import models
from django.utils.translation import gettext_lazy as _
# Create your models here.
class Contact(models.Model):
    name = models.CharField(default=" ", max_length=150, verbose_name='name')
    email = models.EmailField(_('email address'))
    phone = models.CharField(null=True, max_length=15)
    message = models.CharField(max_length=2000, unique=True)
    def __str__(self):
        return self.message