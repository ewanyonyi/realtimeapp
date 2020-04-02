import json
from time import sleep
import datetime
from channels.generic.websocket import JsonWebsocketConsumer
# from channels.db import database_sync_to_async

from .models import CPUdata
from .serializers import CPUdataSerializer

class CpuConsumer(JsonWebsocketConsumer):

    def time_to_json(self, o):
        if isinstance(o, datetime.datetime):
            return o.__str__()

    # data = None
    # @database_sync_to_async
    # def get_name(self):
    #     frequency = CPUdata.objects.all()[0].frequency
    #     usage = CPUdata.objects.all()[0].usage 
    #     time = CPUdata.objects.all()[0].time

    #     data = {
    #         "frequency": frequency,
    #         "usage": usage,
    #         "time": time,
    #     }

    #     return data

    
    def connect(self):
        self.accept()
        
        while True:
            sleep(15)
            
            frequency = CPUdata.objects.all()[0].frequency
            usage = CPUdata.objects.all()[0].usage 
            time = CPUdata.objects.all()[0].time

            data = {
              "frequency": frequency,
              "usage": usage,
              "time": time.minute
            }

            # json_data = json.dumps(data, default = self.time_to_json)
            self.send_json({
                "data": data
            })
    

    def disconnect(self):
        raise StopConsumer()