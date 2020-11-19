import os, subprocess

os.system('cd frontend && npm install && npm run build')
os.remove('package-lock.json')
