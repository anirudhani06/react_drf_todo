from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Todo
from .serializers import TodoSerializer

@api_view(['GET'])
def get_todo(request):
    todos = Todo.objects.all()
    serializer = TodoSerializer(todos,many=True)
    return Response(serializer.data)

@api_view(['POST'])
def add_todo(request):
    serializer = TodoSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['PUT'])
def update_todo(request,id):
    todo = Todo.objects.get(id=id)
    serializer = TodoSerializer(instance=todo,data=request.data)

    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['DELETE'])
def delete_todo(request,id):
    todo = Todo.objects.get(id=id)
    todo.delete()
    return Response()