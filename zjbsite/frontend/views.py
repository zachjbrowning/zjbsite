from django.shortcuts import render
from django.http import JsonResponse
from .models import Contact
from django.views.decorators.csrf import ensure_csrf_cookie
# Create your views here.
@ensure_csrf_cookie
def index(request):
    if request.method == 'POST':
        filled = Contact(name=request.POST['name'], email=request.POST['email'], phone=request.POST['phone'], message=request.POST['message'])
        filled.save()
        return JsonResponse({'result':"Thank for reaching out! I'll be in touch as soon as I can"})
    else:
        return render(request, 'frontend/index.html')

def old(request):
    return render(request, 'old.html')