# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-08-04 15:02
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0004_auto_20170804_1441'),
    ]

    operations = [
        migrations.AlterField(
            model_name='status',
            name='activity_score',
            field=models.CharField(default='', max_length=10),
        ),
        migrations.AlterField(
            model_name='status',
            name='efficacy',
            field=models.CharField(default='', max_length=10),
        ),
        migrations.AlterField(
            model_name='status',
            name='potency',
            field=models.CharField(default='', max_length=10),
        ),
    ]