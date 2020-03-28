from rest_framework import serializers
from .models import CPUdata


class CPUdataSerializer(serializers.ModelSerializer):
    class Meta:
        model = CPUdata
        fields = '__all__'