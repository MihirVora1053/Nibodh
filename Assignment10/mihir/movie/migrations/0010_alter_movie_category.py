# Generated by Django 3.2.6 on 2021-08-28 11:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movie', '0009_movie_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='category',
            field=models.CharField(default='Drama', max_length=50),
        ),
    ]
