from django.http import HttpResponse
from django.shortcuts import render
def index(req):
    return HttpResponse("<h1>hello h1 tag</h1>")
def home(req):
    return render(req,"index.html")
def form(req):
    return render(req,"forms.html")
def showdata(req):
    params={
        "firstname":req.POST.get("firstname"),
        "lastname":req.POST.get("lastname"),
        "email":req.POST.get("email"),
        "password":req.POST.get("password"),
        "phone":req.POST.get("phone"),
        "dob":req.POST.get("dob"),
        "link":req.POST.get("link")
    }
    print(params["firstname"])
    return render(req,"showdata.html",params)