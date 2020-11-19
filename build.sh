import os, subprocess

os.system('npm install && npm run build')
os.remove('package-lock.json')
