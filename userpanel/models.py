from django.db import models
from account.conf import settings
from django.contrib.auth.models import User
from django.utils.translation import ugettext as _

class SourceCode(models.Model):
    def __str__(self):
        return self.code_name

    code_name = models.CharField(max_length=200)
    content = models.CharField('Source Code', max_length=1000)

class StudentCode(models.Model):
    def __str__(self):
        return self.code_name

    code_name = models.CharField(max_length=200)
    content = models.CharField('My Code', max_length=1000)

class Profile(models.Model):
    def __str__(self):
        return str(self.user.username)

    #Levels for user to choose from to see

    BEGINNER = "B"
    INTERMEDIATE = "I"
    ADVANCED = "A"

    ROLE_CHOICES = ((BEGINNER, 'Beginner'),
                          (INTERMEDIATE, 'Intermediate'),
                          (ADVANCED, 'Master')
                          )
    # This field is required
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    #Essential Info for Student
    urole = models.CharField(_("User Level"), max_length=20, choices=ROLE_CHOICES, null=True) #django_role_permissions related field