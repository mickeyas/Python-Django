# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-18 22:18
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20170318_2201'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='owner',
        ),
    ]
