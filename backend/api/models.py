from django.db import models
import uuid
# Create your models here.

class Todo(models.Model):
    id = models.UUIDField(default=uuid.uuid4,unique=True,primary_key=True)
    task = models.CharField(max_length=60,null=True,blank=True)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.task