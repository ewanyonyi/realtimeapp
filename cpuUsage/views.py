from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework import generics
from .models import CPUdata
from .serializers import CPUdataSerializer


class HomeView(TemplateView):
    template_name = "home.html"

    
class ListCpuView(generics.ListAPIView):
    """
    Provides a get method handler.
    """
    queryset =CPUdata.objects.all()
    serializer_class = CPUdataSerializer