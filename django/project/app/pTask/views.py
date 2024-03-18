from .models import Task
from logging import basicConfig, INFO, info
from django.http import JsonResponse
from .serializers import TaskSerializer
import json

template_name = 'pTask/'

#ログレベルセット
basicConfig(
    level = INFO,
    format = '%(asctime)s %(levelname)s %(message)s',
)

def index(req):
   data = TaskSerializer(Task.objects.all(), many=True).data

   # ログ出力
   for data in data:info('[JSON]' + str(data))

   return JsonResponse(data, safe=False, json_dumps_params={'ensure_ascii':False})
