from __future__ import unicode_literals
from django.utils.translation import ugettext_lazy as _
import decimal
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.shortcuts import redirect
from django.views.generic import View, TemplateView, DetailView, ListView, RedirectView
from django.views.generic.edit import FormView
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import permission_required, login_required
from django.contrib.auth.models import User
from django.contrib import messages
from .models import SourceCode, Profile
from .forms import UserLevel
import account.views


#Initial redirection page for URL root
class HomeRedirectView(RedirectView):
    permanent = False

    def get(self, *args, **kwargs):
        if not self.request.user.is_authenticated:
            return redirect("account_login")
        else:
            return redirect("userpanel:userpanel_main")

#If user is logged in, show this page
class idePanel(ListView):
    template_name = "userpanel.html"
    # check user has logged in
    @method_decorator(login_required(login_url='/account/login/'))
    def dispatch(self, request, *args, **kwargs):
        return super(idePanel, self).dispatch(request, *args, **kwargs)

    def get_queryset(self):
        return SourceCode.objects.all()

#Django Pinax email login functionality
class LoginView(account.views.LoginView):
    messages = {
        "login_confirmed": {
            "level": messages.SUCCESS,
            "text": _("Welcome back {username} to your Oxcart.")
        }
    }

    form_class = UserLevel

    def after_login(self, form):
        self.update_level(form)
        self.login_message()
        super(LoginView, self).after_login(form)

    def update_level(self, form):
        urole_field = form.data['urole']
        oxcartuser, created = Profile.objects.get_or_create(user_id = self.request.user.id,
                                                            defaults = {'urole':"B"})
        if urole_field is not None:
            oxcartuser.urole = form.data['urole'][0:1]
            oxcartuser.save()
        else:
            pass
        return

    def login_message(self):
        if self.messages.get("login_confirmed"):
            messages.add_message(
                self.request,
                self.messages["login_confirmed"]["level"],
                self.messages["login_confirmed"]["text"].format(**{
                    "username": self.request.user.username
                })
            )
        return

#If user is logged in, show this page
class Vehicle(ListView):
    template_name = "vehicle.html"
    # check user has logged in
    @method_decorator(login_required(login_url='/account/login/'))
    def dispatch(self, request, *args, **kwargs):
        return super(Vehicle, self).dispatch(request, *args, **kwargs)

    def get_queryset(self):
        return SourceCode.objects.all()

#If user is logged in, show this page
class Statistics(ListView):
    template_name = "statistics.html"
    # check user has logged in
    @method_decorator(login_required(login_url='/account/login/'))
    def dispatch(self, request, *args, **kwargs):
        return super(Statistics, self).dispatch(request, *args, **kwargs)

    def get_queryset(self):
        return SourceCode.objects.all()