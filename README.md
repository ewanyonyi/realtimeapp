# realtimeapp
This is a demo app of real-time websocket communications using django and react

# Installation

## (i). Install redis

```console
sudo apt update
sudo apt install redis-server
```
The commands below can be used to stop, start and enable Redis Server to automatically start up everytime the system boots up…

```console
sudo systemctl stop redis-server
sudo systemctl start redis-server
sudo systemctl enable redis-server
```

## (ii). Build React Frontend UI

###### (a) Install Dependacies

```console
cd frondend
npm install
```
###### (b) Build

```console
npm run-script build
    or
yarn build
```
## (iii). Running the server

Move to the root directory of the project
```console
cd realtimeapp
```

## (a). Create Virtual Envrionment

```console
python3 -m venv .venv
```
Activate virtual environment

```console
source .venv/bin/activate
```
## (b). Install Python Dependacies

```console
pip install -r requirements.txt
```
## (c). Run Celery Task

```console
celery -A realtimeapp worker --loglevel=info
```

## (d). Run The Server

```console
./manage.py runserver 0.0.0.0:8001
```

Now you can access the server on browser by typing localhost:8001
