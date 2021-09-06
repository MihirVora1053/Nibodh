from django.shortcuts import render , redirect
from django.http import HttpResponse
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import authenticate , login ,logout



# Create your views here.

def loginView(request):
    return render(request,"members/login.html")
def signupView(request):
    return render(request,"members/signup.html")


def loginForm(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("pass")
        
        user = authenticate(username = username , password = password )

        if user is not None:
            login(request,user)
            messages.add_message(request, messages.SUCCESS, 'LOGIN successfull!!')
            return redirect("/movie/")

        else:
            messages.add_message(request, messages.ERROR, 'Email or password is not valid. ')
            return redirect("/member/login/")
    else:
        messages.add_message(request, messages.ERROR, 'Please Login.')
        return redirect("/member/login/")
    
    return HttpResponse("login succ")


def signup(request):
    if request.method == "POST":
        username = request.POST.get("username")
        email= request.POST.get("email")
        pass1= request.POST.get("pass1")
        pass2= request.POST.get("pass2")
        f_name = request.POST.get("first_name")
        last_name= request.POST.get("last_name")

        # validationssssss
        if(not(len(pass1)>7 and not pass1.isalnum())):
            messages.add_message(request, messages.INFO, 'Password must belonger then 8 characters and should contain a symbol.')
            return redirect("/member/signup/")
        
        if(not(pass1==pass2)):
            messages.add_message(request, messages.INFO, 'Both the password must be same.')
            return redirect("/member/signup/")

        else:
            newUser = User.objects.create_user(username,email,pass1)
            newUser.first_name = f_name
            newUser.last_name = last_name
            newUser.save()
            return redirect("/member/login/")
    else:
        messages.add_message(request, messages.ERROR, 'Please SignIn.')
        return redirect("/member/signup/")



def Logout(request):
    logout(request)
    messages.add_message(request, messages.SUCCESS, 'LOGOUT successful')
    return redirect("/movie/")