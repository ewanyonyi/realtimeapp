from django.db import models

class CPUdata(models.Model): 
    frequency = models.FloatField() 
    usage = models.FloatField()
    time = models.DateTimeField() 

    # def __dir__(self):
    #     return [self.frequency, self.usage, self.time]

    # def __str__(self):
    #     return self.frequency