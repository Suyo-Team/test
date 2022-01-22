from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.decorators import parser_classes
from rest_framework.parsers import JSONParser

from users.serializers import UserLoginSerializer, UserModelSerializer

from users.models import User

class UserViewSet(viewsets.GenericViewSet):

    queryset = User.objects.filter(is_active=True)
    serializer_class = UserModelSerializer

    @action(detail=False, methods=['post'])
    @parser_classes([JSONParser])
    def login(self, request):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user, token = serializer.save()
        data = {
            'user': UserModelSerializer(user).data,
            'access_token': token
        }
        data1={'access_token': token}
        return Response(data, status=status.HTTP_201_CREATED)