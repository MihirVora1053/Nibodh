from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

# Create your models here.
class Movie(models.Model):
    movie_id=models.AutoField
    name=models.CharField(max_length=50)
    director_name=models.CharField(max_length=50)
    box_office=models.BigIntegerField()
    release_date=models.DateField(default=timezone.now)
    imdb_ratings=models.FloatField()
    poster=models.ImageField(upload_to="movie\images",default="https://via.placeholder.com/300x300.png?text=Default")
    verdict=models.CharField(max_length=10,default="ATB")
    rent_price=models.FloatField(default=100.00)
    genre=models.CharField(max_length=50,default="Drama")
    def __str__(self):
        return self.name

class contact(models.Model):
    contact_id = models.AutoField(primary_key=True)
    email = models.CharField(max_length=50,default="")
    name =  models.CharField(max_length=50)
    desc =  models.CharField(max_length=500)
    phone = models.IntegerField()
    screenshot = models.ImageField(upload_to="contact\images",default="https://via.placeholder.com/500x500.png?text=Default")
    pub_date = models.DateField(default=timezone.now)
    def __str__(self):
        return self.name

class order(models.Model):
    jsonCart=models.CharField(max_length=200)
    email = models.CharField(max_length=50,default="")
    first_name =  models.CharField(max_length=50)
    last_name =  models.CharField(max_length=50)
    address =  models.CharField(max_length=200)
    zipcode = models.IntegerField()
    state =  models.CharField(max_length=50)
    isSameBillingAddress=models.BooleanField()
    def __str__(self):
        return self.email


class Blog (models.Model):

    title = models.CharField(max_length=50)
    body = models.CharField(max_length=500)
    image = models.ImageField(upload_to="blog/images" )
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    pub_date = models.DateField(auto_now_add=True)
    def __str__(self):
        return self.title + " | " + str(self.author)