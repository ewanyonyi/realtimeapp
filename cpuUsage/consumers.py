import json
from channels.generic.websocket import AsyncWebsocketConsumer

class CpuConsumer(AsyncWebsocketConsumer):

    # async def websocket_connect(self, event):
    #     await self.send({
    #         "type": "websocket.accept"
    #     })

    # async def websocket_receive(self, event):
    #     # Echo the received payload
    #     await self.send({
    #         "type": "websocket.send",
    #         "text": event["text"]
    #     })

    async def connect(self):
        await self.accept()

    async def disconnect(self, close_code):
        print('disconnected')

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']

        await self.send(text_data=json.dumps({
            'message': message
        }))