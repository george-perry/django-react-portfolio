from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
    path('', index),
    path('blog', index),
    path('blog/<int:pk>', post_index),
]
