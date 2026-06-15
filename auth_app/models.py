from django.db import models


class RegisterUsers(models.Model):
    fullname = models.CharField(max_length=120)
    username = models.CharField(max_length=100)
    phone_number = models.IntegerField()
    email = models.EmailField(max_length=50)
    password = models.CharField(max_length=30)
    create_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField()

    def __str__(self):
        return f"{self.username}"


