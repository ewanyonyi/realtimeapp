from django.db import models

class CPUdata(models.Model): 
    frequency = models.FloatField() 
    usage = models.FloatField()
    time = models.DateTimeField() 

    def __str__(self):
        return self.frequency