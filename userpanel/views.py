from __future__ import unicode_literals
import decimal
from django.shortcuts import render
from django.shortcuts import redirect
from django.views.generic import View, TemplateView, DetailView, ListView, RedirectView
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import permission_required, login_required
from .models import SourceCode
import account.forms
import account.views


#Initial redirection page for URL root
class HomeRedirectView(RedirectView):
    permanent = False

    def get(self, *args, **kwargs):
        if not self.request.user.is_authenticated():
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
    form_class = account.forms.LoginEmailForm

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