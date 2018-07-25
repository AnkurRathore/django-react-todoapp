from django.db import models


# Create your models here.

class Note(models.Model):
    notes = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.notes} created at {self.created_at}'
