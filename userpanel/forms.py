from __future__ import unicode_literals
import re
try:
    from collections import OrderedDict
except ImportError:
    OrderedDict = None

from django.utils.translation import ugettext_lazy as _
from django import forms
from django.forms.widgets import TextInput, Select
from .models import Profile
from account.forms import LoginEmailForm

class UserLevel(LoginEmailForm):

    #Levels for user to choose from to see

    BEGINNER = "B"
    INTERMEDIATE = "I"
    ADVANCED = "A"

    ROLE_CHOICES = ((BEGINNER, 'Beginner'),
                          (INTERMEDIATE, 'Intermediate'),
                          (ADVANCED, 'Master')
                    )
    urole = forms.ChoiceField(label=_("Urole"), widget=Select, choices=ROLE_CHOICES)

    class Meta:
        model = Profile
        fields = ['urole']