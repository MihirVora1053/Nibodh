# Generated by Django 3.2.6 on 2021-08-31 15:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('movie', '0015_order'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='cartJson',
            new_name='jsonCart',
        ),
    ]
