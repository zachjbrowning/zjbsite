from django.shortcuts import render
from django.http import JsonResponse
from .models import Contact
from django.views.decorators.csrf import ensure_csrf_cookie
# Create your views here.
@ensure_csrf_cookie
def index(request):
    if request.method == 'POST':
        print(request.POST['name'], request.POST['message'])
        return JsonResponse({'HEY':'NRUTHAA'})
    return render(request, 'frontend/index.html')

def old(request):
    return render(request, 'old.html')