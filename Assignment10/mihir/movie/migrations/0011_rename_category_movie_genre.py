# Generated by Django 3.2.6 on 2021-08-28 11:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('movie', '0010_alter_movie_category'),
    ]

    operations = [
        migrations.RenameField(
            model_name='movie',
            old_name='category',
            new_name='genre',
        ),
    ]
