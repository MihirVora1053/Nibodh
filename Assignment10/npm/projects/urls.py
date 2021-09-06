from . import views
from django.urls import path 

urlpatterns = [    
    path("",views.Index),
    path("create/",views.CreateView),
    path("createsubmit/",views.Create)
]