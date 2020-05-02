from django.shortcuts import render
from .models import Contact
# Create your views here.
def index(request):
    if request.method == 'POST':
        newting = Contact(name=request.POST['name'], email=request.POST['email'], phone=request.POST['phone'], message=request.POST['message'])
        newting.save()
    return render(request, 'frontend/index.html')

def old(request):
    return render(request, 'old.html')

    if request.method == 'POST':
        form = RequestForm(request.POST)
        if form.is_valid():
            msg = form.cleaned_data['msg']
            req = Post(owner=request.user, msg=msg)
            req.save()
            return redirect('my-requests')