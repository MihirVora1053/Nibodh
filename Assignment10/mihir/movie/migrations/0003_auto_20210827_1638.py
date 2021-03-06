# Generated by Django 3.2.6 on 2021-08-27 11:08

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('movie', '0002_auto_20210827_1551'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='poster',
            field=models.ImageField(default='', upload_to='movie\\images'),
        ),
        migrations.AlterField(
            model_name='movie',
            name='release_date',
            field=models.DateField(default=datetime.datetime(2021, 8, 27, 11, 8, 39, 506853, tzinfo=utc)),
        ),
    ]
