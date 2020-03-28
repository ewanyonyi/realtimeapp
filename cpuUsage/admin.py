from django.contrib import admin
from .models import CPUdata

class CPUdataAdmin(admin.ModelAdmin):
      list_display = ('frequency', 'usage', 'time')

# Register your models here.
admin.site.register(CPUdata, CPUdataAdmin)
