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
