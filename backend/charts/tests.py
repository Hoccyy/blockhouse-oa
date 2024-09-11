from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient
from .models import testItem
import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'myproject.settings')

class ItemTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.item_data = {
            'name': 'Test Item',
            'price': '13.26'
        }
        self.item = testItem.objects.create(**self.item_data)
        self.url = '/api/items/'

    def test_create_item(self):
        response = self.client.post(self.url, self.item_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['name'], self.item_data['name'])
        self.assertEqual(response.data['price'], self.item_data['price'])

    def test_get_item(self):
        response = self.client.get(f'{self.url}{self.item.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['name'], self.item.name)
        self.assertEqual(response.data['price'], str(self.item.price))

    def test_update_item(self):
        updated_data = {
            'name': 'Updated Item',
            'price': '26.99'
        }
        response = self.client.put(f'{self.url}{self.item.id}/', updated_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['name'], updated_data['name'])
        self.assertEqual(response.data['price'], updated_data['price'])

    def test_delete_item(self):
        response = self.client.delete(f'{self.url}{self.item.id}/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        response = self.client.get(f'{self.url}{self.item.id}/')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
