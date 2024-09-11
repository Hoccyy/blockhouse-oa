# Web Development Coding Test: Next.js Application with Django API Integration 
Dashboard project made with Django for the backend and Next.Js for frontend.

---
# Requirements
- python
- pip
- django
- django-cors-headers
- django djangorestframework
- chartjs
- TypeScript

---

### Getting Started
##### 1. Clone the repo and enter it from the CLI
```
git clone https://github.com/Hoccyy/blockhouse-oa.git
cd blockhouse-oa
```
##### 2. Run setup.sh if on Mac/Linux or setup.bat if on Windows
###### Mac/Linux
```
#!/bin/bash
npm install
python3 -m venv .venv
source .venv/bin/activate
cd backend

pip install django
pip install django djangorestframework
pip install django-cors-headers
```

###### Windows
```
@echo off
npm install

python -m venv .venv

call .venv\Scripts\activate

cd backend

pip install django
pip install djangorestframework
pip install django-cors-headers
```

##### 3. Run start.sh if on Mac/Linux or start.bat if on Windows
###### Mac/Linux
```
#!/bin/bash
source .venv/bin/activate

python3 backend/manage.py runserver &
PYTHON_PID=$!

npm run dev

wait $PYTHON_PID
```

###### Windows

```
@echo off
call .venv\Scripts\activate

start "" /b python backend\manage.py runserver
set "PYTHON_PID=%ERRORLEVEL%"

npm run dev

:waitloop
tasklist /FI "PID eq %PYTHON_PID%" 2>NUL | find /I /N "python.exe">NUL
if "%ERRORLEVEL%"=="0" (
    timeout /T 5 /NOBREAK >NUL
    goto :waitloop
)

```
### Usage
After setting up the requirements and starting both servers, open the link in your web browser on [local host](http://localhost:3000) port 3000 (http://localhost:3000).
