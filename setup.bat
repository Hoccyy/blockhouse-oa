@echo off
npm install

python -m venv .venv

call .venv\Scripts\activate

cd backend

pip install django
pip install djangorestframework
pip install django-cors-headers
