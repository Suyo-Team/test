from django.shortcuts import render

# Create your views here.
from rest_framework import mixins, status, viewsets
from rest_framework.response import Response

from propertys.models import Property
from rest_framework.permissions import IsAuthenticated
from propertys.serializers import (PropertyModelSerializer, PropertySerializer)

class PropertyViewSet(mixins.CreateModelMixin,
                        mixins.ListModelMixin,
                        viewsets.GenericViewSet):

    serializer_class = PropertyModelSerializer

    def get_permissions(self):
        permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]

        
    def create(self, request, *args, **kwargs):
        serializer = PropertySerializer(data=request.data, context={"request": self.request})
        serializer.is_valid(raise_exception=True)
        exp = serializer.save()
        data = PropertyModelSerializer(exp).data
        return Response(data, status=status.HTTP_201_CREATED)



    def get_queryset(self):
        """Restrict list to only user experience."""
        queryset = Property.objects.all()
        return queryset     
