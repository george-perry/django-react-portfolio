# Generated by Django 4.1.4 on 2022-12-31 02:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_posts_id_alter_posts_project'),
    ]

    operations = [
        migrations.AddField(
            model_name='projects',
            name='link',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='projects',
            name='skills',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='projects',
            name='text',
            field=models.TextField(default=''),
        ),
    ]
