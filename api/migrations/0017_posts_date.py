# Generated by Django 4.1.4 on 2023-01-03 01:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0016_alter_posts_project'),
    ]

    operations = [
        migrations.AddField(
            model_name='posts',
            name='date',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]