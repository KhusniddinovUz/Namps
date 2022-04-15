from django.db import models


class Post(models.Model):
    title = models.TextField(blank=False)
    content = models.TextField(blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    img = models.ImageField(upload_to='blog/images', blank=False)
