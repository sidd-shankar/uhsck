from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('iq/', include('iq.urls')),
    path('admin/', admin.site.urls),
]
