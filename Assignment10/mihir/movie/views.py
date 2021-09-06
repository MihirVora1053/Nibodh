from django.shortcuts import render,redirect
from django.http import HttpResponse
from . models import Movie,contact,order,Blog
import json
# Create your views here.
def home(req):
    return render(req,"movie\home.html")
def List(req):
    # Movies=Movie.objects.all()
    AllGenre=Movie.objects.values("genre")
    genres={genre["genre"] for genre in AllGenre}
    Movies={}
    for genre in genres:
        Movies[genre]=Movie.objects.filter(genre=genre)
    params={
        "data":Movies
    }
    return render(req,"movie\index.html",params)


def details(req,id):
    # id=req.GET.get("id")
    try:
        params={"data":Movie.objects.get(id=id),"error":"null"}
    except:
        params={"data":{},"error":"Movie Not Found"}
    print(params)   
    return render(req,"movie\detail.html",params)


def contactUs(req):
    return render(req,"movie\contactus.html");
def checkout(req):
    str=req.POST.get("cartJson")
    cart=json.loads(str)
    currentCart=cart

    totalPrice=0
    for id in cart:
        temp=cart[id]
        tempObj=Movie.objects.get(id=id)
        price=tempObj.rent_price
        temp["price"]=price
        totalPrice=totalPrice+price
        currentCart[id] = temp
    params = {
        "totalPrice" : totalPrice,
        "data": currentCart
    }
    return render(req,"movie\checkout.html",params)

def contactSubmit(req):
    email=req.POST.get("email")
    name=req.POST.get("name")
    tel=req.POST.get("phone")
    desc=req.POST.get("desc")
    File=req.POST.get("screenshot")
    newContact=contact(email=email,name=name,desc=desc,phone=tel,screenshot=File)
    newContact.save()
    return HttpResponse("Thank You For your Feedback :)")

def submitcheckout(req):
    if(req.method=="POST"):
        jsonCart= req.POST.get("jsonCart")
        first_name= req.POST.get("first_name")
        last_name= req.POST.get("last_name")
        email= req.POST.get("email")
        address= req.POST.get("address")
        state= req.POST.get("state")
        zip= req.POST.get("zip")
        isSameBillingAddress= req.POST.get("isSameBillingAddress")

        if(isSameBillingAddress=="on"):
            isSameBillingAddress = True
        else:
            isSameBillingAddress = False
        newOrder = order(jsonCart=jsonCart,email=email, first_name=first_name ,last_name=last_name,state=state,zipcode=zip,address=address,isSameBillingAddress=isSameBillingAddress)
        newOrder.save()
        return HttpResponse("Thank you for ordering!!")
    else:
        return HttpResponse("You are on a wrong page. please <a href='/movie/list'>Click here</a> to add items")

def login(req):
    return render(req,"movie/login.html")


def signup(req):
    return render(req,"movie/signup.html")
def bloglist(req):
    blog_list = Blog.objects.all()
    
    params = {
        "data" : blog_list
    }
    return render(req,"movie/bloglist.html",params)


def blogcreate(req):
    title = req.POST.get("title")
    body = req.POST.get("body")
    author = req.user
    if(req.FILES):
        image = req.FILES["image"]
        newBlog = Blog(title= title ,image = image , body=body , author = author)
    else:
        newBlog = Blog(title= title , body=body , author = author)    
    print(newBlog)
    newBlog.save()
    return redirect("/movie/bloglist")


def blogView(req):
    return render(req,"movie/blogcreate.html")


def blogdetails(req,id):
    blog = Blog.objects.get(id=id)
    params = {
        "blog":blog
    }
    return render(req,"movie/blogdetails.html",params)
