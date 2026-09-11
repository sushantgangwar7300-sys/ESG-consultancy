@echo off
title Kai Prakriti - Next.js Development Server
echo ===================================================
echo Starting Kai Prakriti Local Development Server...
echo ===================================================

set "PATH=C:\Users\susha\AppData\Roaming\fnm\node-versions\v24.21.0\installation;%PATH%"

start http://localhost:3000
npm.cmd run dev
pause
