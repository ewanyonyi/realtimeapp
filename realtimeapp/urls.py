from django.contrib import admin
from django.urls import path, include                 
from rest_framework import routers                    
from todo import views     
from trackingAPI.views import ListCryptocurrencyView                       

router = routers.DefaultRouter()                      
router.register(r'todos', views.TodoView, 'todo')     

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', ListCryptocurrencyView.as_view()),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),              
]