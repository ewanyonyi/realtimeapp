from django.contrib import admin
from django.urls import path, include                 
from rest_framework import routers                    
from todo import views    
from cpuUsage.views import ListCpuView                   

router = routers.DefaultRouter()                      
router.register(r'todos', views.TodoView, 'todo')     

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),  
    path('cpu', ListCpuView.as_view()),            
]