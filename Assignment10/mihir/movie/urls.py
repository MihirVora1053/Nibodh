from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path('',views.home),
    path('list/',views.List),
    path('detail/<int:id>',views.details),
    path('contactus/',views.contactUs),
    path('contactsubmit/',views.contactSubmit),
    path('checkout/',views.checkout),
    path('submitcheckout/',views.submitcheckout),
    path('login/',views.login),
    path('signup/',views.signup),
    path('bloglist/',views.bloglist),
    path('create/',views.blogView),
    path('blogcreate/',views.blogcreate),
    path('blogdetails/<int:id>',views.blogdetails),
]
