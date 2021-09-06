from django.http import HttpResponse
from django.shortcuts import render

def home(req):
    # return render(req,"home.html")
    return HttpResponse("<h1>Hello Mihir</h1>")