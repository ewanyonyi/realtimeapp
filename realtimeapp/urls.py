from django.contrib import admin
from django.urls import path, include  
from django.conf.urls import url               
from rest_framework import routers                    
from todo import views    
from cpuUsage.views import ListCpuView, HomeView, check_url, FrontendAppView                

router = routers.DefaultRouter()                      
router.register(r'todos', views.TodoView, 'todo')     

urlpatterns = [
    path('index/', HomeView.as_view()),
    path('admin/', admin.site.urls),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),  
    path('cpu', ListCpuView.as_view()),
    path('url_checker', check_url),
    url(r'^', FrontendAppView.as_view())          
]