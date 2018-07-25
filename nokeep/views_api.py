from rest_framework import viewsets, permissions

from .models import Note
from .serializers import NoteSerializer


class NoteViewset(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = NoteSerializer
