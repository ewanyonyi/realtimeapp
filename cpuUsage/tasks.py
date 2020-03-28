from django.utils import timezone
from time import sleep
from celery import shared_task
import psutil
import platform

from .models import CPUdata


@shared_task
# do some heavy stuff
def get_cpu_data():
    print('Getting cpu data ...')
    # let's print CPU information
    # CPU frequencies
    cpufreq = psutil.cpu_freq()
    frequency = "{:.2f}".format(cpufreq.current)
    # CPU usage
    total_cpu_usage = psutil.cpu_percent()
    time = timezone.now()

    CPUdata.objects.create(
        frequency = frequency,
        usage = total_cpu_usage,
        time = time
    )
    # Sleep 3 seconds to avoid any errors
    sleep(3)


@shared_task
def update_cpu_data():
    print('Updating cpu data ...')
    # let's print CPU information
    # CPU frequencies
    cpufreq = psutil.cpu_freq()
    cpufreq = psutil.cpu_freq()
    frequency = "{:.2f}".format(cpufreq.current)
    # CPU usage
    usage = psutil.cpu_percent()
    time = timezone.now()

    data = {'frequency': frequency, 'usage':usage, 'time': time}
    CPUdata.objects.update(**data)

    sleep(3)

if not CPUdata.objects.all():      
    get_cpu_data()

while True:
    sleep(15)
    update_cpu_data()