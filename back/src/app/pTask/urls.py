from django.urls import path
from .views import index, post, put, delete

urlpatterns = [
    path('', index),
    path('post/', post),
    path('put/', put),
    path('delete/', delete),
]
