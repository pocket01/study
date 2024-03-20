from django.shortcuts import render

template_name = 'pMusic/'

def index(request): return render(request, template_name + 'index.html')
