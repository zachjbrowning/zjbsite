from django.urls import path
from . import views


urlpatterns = [
    path('', views.index ),
    path('oldsite', views.old),
    path('projects', views.index ),
    path('contact', views.index ),
    

]