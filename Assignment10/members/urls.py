from django.urls import path
from . import views
urlpatterns = [
    path("login/" , views.loginView),
    path("signup/",views.signupView),
    path("loginsubmit/",views.loginForm),
    path("signupsubmit/",views.signup),
    path("logout/",views.Logout)
]
