from django.db import models

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