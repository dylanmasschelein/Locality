# Generated by Django 4.0.6 on 2022-07-20 00:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_remove_customerprofile_status_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='serviceproviderprofile',
            name='first_name',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='serviceproviderprofile',
            name='last_name',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='user',
            name='is_customer',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='user',
            name='is_sp',
            field=models.BooleanField(default=True),
        ),
    ]
