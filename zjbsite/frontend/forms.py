from django import forms
from .models import Contact 



class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact 
        fields = ('name', 'email', 'phone', 'message')
        widgets = {
            'name' : forms.TextInput(attrs={'required':True, 'placeholder':'name'}),
            'email' : forms.EmailInput(attrs={'required':True, 'placeholder':'email'}),
            'phone' : forms.TextInput(attrs={'placeholder':'phone'}),
            'message' : forms.Textarea(attrs={'required':True, 'placeholder':'message'}),
        }