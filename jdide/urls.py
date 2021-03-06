"""jdide URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.conf import settings
from django.contrib import admin
from django.conf.urls.static import static
from django.contrib.sites.models import Site
from django.views.generic import TemplateView
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from userpanel.views import LoginView, HomeRedirectView

urlpatterns = [
    url(r'^$',HomeRedirectView.as_view(),name="home"),
    url(r'^admin/', admin.site.urls),
    url(r'^account/login/$', LoginView.as_view(), name="account_login"),
    url(r"^userpanel/", include(('userpanel.urls', 'userpanel'), namespace = 'userpanel')),
    url(r'^account/', include('account.urls')),
    #url('^markdown/', include( 'django_markdown.urls')),
]

if settings.DEBUG:
    # static files (images, css, javascript, etc.)
    urlpatterns += staticfiles_urlpatterns()
    # media files
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)