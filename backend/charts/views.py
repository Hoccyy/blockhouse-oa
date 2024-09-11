from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import CandlestickSerializer, LineChartSerializer, BarChartSerializer, PieChartSerializer
from rest_framework import generics
from .models import testItem
from .serializers import TestItemSerializer


class CandlestickDataView(APIView):
    def get(self, request, format=None):

        data = [
            {"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
            {"x": "2023-01-02", "open": 35, "high": 45, "low": 30, "close": 40},
            {"x": "2022-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
            {"x": "2020-01-02", "open": 35, "high": 45, "low": 30, "close": 40},
            {'x': '2023-09-03', 'open': 130, 'high': 160, 'low': 100, 'close': 140},
            {'x': '2024-09-04', 'open': 140, 'high': 180, 'low': 120, 'close': 170},
            {'x': '2024-09-05', 'open': 170, 'high': 200, 'low': 150, 'close': 180},
        ]
        serializer = CandlestickSerializer(data, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class LineChartDataView(APIView):
    def get(self, request, format=None):
        months = ["Jan", "Feb", "Mar", "Apr"]
        dates =  [10, 20, 30, 40]

        data = {
            'labels': months,
            'data': dates
        }

        serializer = LineChartSerializer(data)
        return Response(serializer.data, status=status.HTTP_200_OK)

class BarChartDataView(APIView):
    def get(self, request, format=None):
        products = ['Product A', 'Product B', 'Product C']
        sales = [100, 150, 200]

        data = {
            'labels': products,
            'data': sales
        }
        serializer = BarChartSerializer(data)
        return Response(serializer.data, status=status.HTTP_200_OK)

class PieChartDataView(APIView):
    def get(self, request, format=None):
        labels = ["Red", "Blue", "Yellow"]
        data =  [300, 50, 100]

        data = {
            'labels': labels,
            'data': data
        }

        serializer = PieChartSerializer(data)
        return Response(serializer.data, status=status.HTTP_200_OK)


class TestItemListCreateAPIView(generics.ListCreateAPIView):
    queryset = testItem.objects.all()
    serializer_class = TestItemSerializer

class TestItemDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = testItem.objects.all()
    serializer_class = TestItemSerializer