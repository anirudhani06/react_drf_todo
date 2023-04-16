from django.urls import path
from . import views


urlpatterns = [
    path('get-todo/',views.get_todo,name='get-todo'),
    path('add-todo/',views.add_todo,name='add-todo'),
    path('update-todo/<str:id>/',views.update_todo,name='update-todo'),
    path('delete-todo/<str:id>/',views.delete_todo,name='delete-todo'),
]
