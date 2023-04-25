from rest_framework.serializers import ModelSerializer

from .models import User, Blog, Comment

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']


class BlogSerializer(ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id', 'title', 'content', 'date']

class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'name', 'comment', 'date']
