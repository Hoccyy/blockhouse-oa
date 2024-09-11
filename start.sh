#!/bin/bash
source .venv/bin/activate

python3 backend/manage.py runserver &
PYTHON_PID=$!

npm run dev

wait $PYTHON_PID
