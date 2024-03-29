# Generated by Django 4.0.6 on 2022-07-29 21:39

import business.models
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Business',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('business_name', models.CharField(max_length=100)),
                ('legal_name', models.CharField(max_length=100)),
                ('business_number', models.CharField(blank=True, max_length=100, null=True)),
                ('business_type', models.CharField(max_length=50)),
                ('description', models.CharField(blank=True, max_length=255, null=True)),
                ('location', models.CharField(blank=True, max_length=255, null=True)),
                ('business_image', models.ImageField(blank=True, null=True, upload_to=business.models.upload_path)),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
