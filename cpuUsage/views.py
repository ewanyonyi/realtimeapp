from django.shortcuts import render
from rest_framework import generics
from .models import CPUdata
from .serializers import CPUdataSerializer

class ListCpuView(generics.ListAPIView):
    """
    Provides a get method handler.
    """
    queryset =CPUdata.objects.all()
    serializer_class = CPUdataSerializer