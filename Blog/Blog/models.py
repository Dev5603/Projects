from django.contrib.auth.models import AbstractUser
from django.db import models

from .modules import blogDate, commentDate

class User(AbstractUser):
    pass
    
class Blog(models.Model):
    author = models.ForeignKey(User, default=True, on_delete=models.PROTECT, related_name="admin")
    title = models.CharField(max_length=100)
    content = models.TextField()
    date = models.CharField(default=blogDate, max_length=20)

    def __str__(self) -> str:
        return self.title
    
class Comment(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE, related_name="post")
    name = models.CharField(max_length=15)
    comment = models.TextField()
    date = models.CharField(default=commentDate, max_length=35)

    def __str__(self) -> str:
        return f"Comment from {self.name}"