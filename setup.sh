#!/bin/bash
npm install
python3 -m venv .venv
source .venv/bin/activate
cd backend

pip install django
pip install django djangorestframework
pip install django-cors-headers
