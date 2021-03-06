# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2018-02-03 04:46
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SourceCode',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code_name', models.CharField(max_length=200)),
                ('content', models.CharField(max_length=1000, verbose_name='Source Code')),
            ],
        ),
        migrations.CreateModel(
            name='StudentCode',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code_name', models.CharField(max_length=200)),
                ('content', models.CharField(max_length=1000, verbose_name='My Code')),
            ],
        ),
    ]
