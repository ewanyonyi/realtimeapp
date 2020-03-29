# from django.urls import url
from django.conf.urls import url

from .consumers import CpuConsumer

websocket_urlpatterns = [
    url(r'index/$', CpuConsumer),
]