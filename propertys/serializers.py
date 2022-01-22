from rest_framework import serializers
from propertys.models import Property

class PropertyModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = ('id', 'address', 'owner', 'latitude', 'longitude')




class PropertySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    address = serializers.CharField(max_length=100)
    owner = serializers.CharField(max_length=100)
    latitude = serializers.DecimalField(max_digits=8, decimal_places=6)
    longitude = serializers.DecimalField(max_digits=9, decimal_places=6)

    def create(self, validated_data):
        return Property.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.address = validated_data.get('address', instance.address)
        instance.owner = validated_data.get('owner', instance.owner)
        instance.latitude = validated_data.get('latitude', instance.latitude)
        instance.longitude = validated_data.get('longitude', instance.longitude)
        instance.save()
        return instance