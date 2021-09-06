from django.contrib import admin
from . models import Movie,contact,order,Blog
# Register your models here.
admin.site.register(Movie)
admin.site.register(contact)
admin.site.register(order)
admin.site.register(Blog)
