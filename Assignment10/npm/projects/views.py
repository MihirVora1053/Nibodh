from django.shortcuts import render,redirect
from django.contrib import messages
import validators
from .models import Project
 

def Index(request):
    
    return render(request,"projects/index.html")


def CreateView(request):

    return render(request,"projects/createForm.html")


def Create(request):
    if request.method == "POST":
        screenshot = None
        email = request.POST.get("email")
        title = request.POST.get("title")
        desc = request.POST.get("desc")
        enroll_no = request.POST.get("enroll_no")
        year = request.POST.get("year")
        sec = request.POST.get("sec")
        git_link = request.POST.get("git_link")
        live_link = request.POST.get("live_link")
        if(request.FILES):
            screenshot = request.FILES["screenshot"]
        submitted_by = request.user

        # validations
        if(not(len(enroll_no)==10)):
            messages.add_message(request, messages.ERROR, 'Enrollment number Invalid.')
            return redirect("/projects/create/")
        if( not (validators.url(git_link))):
            messages.add_message(request, messages.ERROR, 'Link Invalid.')
            return redirect("/projects/create/")
        if( len(live_link)<0 and not (validators.url(live_link))):
            messages.add_message(request, messages.ERROR, 'Link1 Invalid.')
            return redirect("/projects/create/")
        if(request.user is None):
            messages.add_message(request, messages.ERROR, 'You are not allowed here')
            return redirect("/project/create/")
        
        # validation over
        try:
            NewProject = Project(
                                    email=email,
                                    title=title,
                                    desc=desc,
                                    enroll_no=enroll_no,
                                    year=year,sec=sec,
                                    git_link=git_link,
                                    live_link=live_link if (not len(live_link)>0)else None,
                                    screenshot= screenshot if (not (request.FILES==None))else None,
                                    submitted_by=submitted_by
                                )
            NewProject.save()
        except Exception as e:

                messages.add_message(request, messages.ERROR, e)
                return redirect("/projects/create/")
                
        return render(request,"projects/index.html")
    else:
        messages.add_message(request, messages.ERROR, 'You are not allowed here')
        return redirect("/")