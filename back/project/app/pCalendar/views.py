from django.shortcuts import render

template_name = 'pCalendar/'

def index(request): return render(request, template_name + 'index.html')
