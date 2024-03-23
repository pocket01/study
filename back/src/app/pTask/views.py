from .models import Task
from logging import basicConfig, INFO, info
from .serializers import TaskSerializer
from django.http import HttpRequest,  JsonResponse
from django.db import connection
from rest_framework.parsers import JSONParser

template_name = 'pTask/'

#ログレベルセット
basicConfig(
   level = INFO,
   format = '%(asctime)s %(levelname)s %(message)s',
)

# 初期表示
def index(req:HttpRequest):
   datas = TaskSerializer(Task.objects.all(), many=True).data

   # ログ出力
   for data in datas:info('[Index]' + str(data))
   return JsonResponse(datas, safe=False, json_dumps_params={'ensure_ascii':False})

# 登録
def post(req:HttpRequest):
   if req.method == 'POST':
      with connection.cursor() as cursor:
         cursor.callproc('get_next_task_cd')
         result = cursor.fetchone()
      cd = result[0]
      info('[New TaskCd]' + str(cd))

      reqParams = JSONParser().parse(req)['task']
      reqParams['cd'] = cd
      info('[ReqParams]' + str(reqParams))

      serializer = TaskSerializer(data=reqParams)
      if serializer.is_valid(raise_exception=True):
         serializer.save()

      return JsonResponse(serializer.data, safe=False, json_dumps_params={'ensure_ascii':False})

# 更新
def put(req:HttpRequest):
   if req.method == 'PUT':
      reqParams = JSONParser().parse(req)['task']
      info('[ReqParams]' + str(reqParams))
      target = Task.objects.get(cd=reqParams['cd'])
      serializer = TaskSerializer(target, data=reqParams)
      if serializer.is_valid(raise_exception=True):
         serializer.save()
      return JsonResponse(serializer.data, safe=False, json_dumps_params={'ensure_ascii':False})

# 削除
def delete(req:HttpRequest):
   if req.method == 'DELETE':
      reqParams = JSONParser().parse(req)['task']
      info('[ReqParams]' + str(reqParams))
      task = Task.objects.filter(cd=reqParams['cd'])
      task.delete()
      return JsonResponse({}, safe=False, json_dumps_params={'ensure_ascii':False})
