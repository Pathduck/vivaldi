@echo off 
sed.exe -i 's/"//g' %1
sed.exe -i -E 's/(.*),(.*),(.*),(.*)(,.*)/\1,\4,\2,\3/' %1
