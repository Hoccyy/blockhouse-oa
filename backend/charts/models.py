from django.db import models

class testItem(models.Model):
    name = models.CharField(max_length=255)
    price = models.TextField()

    def __str__(self):
        return self.name
