from django.contrib import admin
from .models import Cryptocurrency

class CryptocurrencyAdmin(admin.ModelAdmin):
      list_display = ('cryptocurrency', 'price', 'market_cap', 'change')

# Register your models here.
admin.site.register(Cryptocurrency, CryptocurrencyAdmin)