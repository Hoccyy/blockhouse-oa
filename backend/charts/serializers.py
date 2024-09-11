from rest_framework import serializers
from .models import testItem

class CandlestickSerializer(serializers.Serializer):
    x = serializers.DateField()
    open = serializers.FloatField()
    high = serializers.FloatField()
    low = serializers.FloatField()
    close = serializers.FloatField()

class LineChartSerializer(serializers.Serializer):
    labels = serializers.ListField(child=serializers.CharField())
    data = serializers.ListField(child=serializers.IntegerField())

class BarChartSerializer(serializers.Serializer):
    labels = serializers.ListField(child=serializers.CharField())
    data = serializers.ListField(child=serializers.IntegerField())

class PieChartSerializer(serializers.Serializer):
    labels = serializers.ListField(child=serializers.CharField())
    data = serializers.ListField(child=serializers.IntegerField())

class TestItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = testItem
        fields = ['name', 'price']