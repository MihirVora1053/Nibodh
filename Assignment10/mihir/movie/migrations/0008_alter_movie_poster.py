# Generated by Django 3.2.6 on 2021-08-28 11:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movie', '0007_alter_movie_poster'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='poster',
            field=models.ImageField(default='https://via.placeholder.com/300x300.png?text=Default', upload_to='movie\\images'),
        ),
    ]
