from rest_framework import generics
from .serializers import PostSerializer
from .models import Post


class Posts(generics.ListAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
