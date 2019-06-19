from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('response/<str:query>', views.graphData, name='response'),
    path('list/<str:pq>',views.options,name='list')
]
