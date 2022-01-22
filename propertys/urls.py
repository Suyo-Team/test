from rest_framework.routers import DefaultRouter
from django.urls import include, path

from propertys import views

router = DefaultRouter()
router.register(r'propertys', views.PropertyViewSet , basename='propertys')

urlpatterns = [
    path('', include(router.urls))
]