"""
URL configuration for pconf project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

#アプリケーションルート
app_root = 'app'
slash = '/'
period = '.'

app_root_url = app_root + slash
app_root_dir = app_root + period

urlpatterns = [
    path('admin/', admin.site.urls),
    path(app_root_url + 'pTask/', include(app_root_dir + 'pTask.urls')),
    path(app_root_url + 'pCalendar/', include(app_root_dir + 'pCalendar.urls')),
    path(app_root_url + 'pMusic/', include(app_root_dir + 'pMusic.urls')),
]
