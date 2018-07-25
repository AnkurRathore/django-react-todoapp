from django.conf.urls import include, url
from django.urls import path
from rest_framework import routers

from .views_api import NoteViewset

router = routers.DefaultRouter()
router.register('notes', NoteViewset)

urlpatterns = [
    path("", include(router.urls)),
]
