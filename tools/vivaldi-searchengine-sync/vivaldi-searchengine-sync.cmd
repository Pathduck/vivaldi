@echo off

set CHROME_PROFILE="%LOCALAPPDATA%\Chromium\User Data\Default"
set VIVALDI_PROFILE="%LOCALAPPDATA%\Vivaldi\User Data\Default"
set SQLITE3="sqlite3"
set SCRIPTDIR=%~dp0

echo Copying Chrome Web Data to chrome.db...
copy /y %CHROME_PROFILE%\"Web Data" chrome.db
if %errorlevel% neq 0 exit /b %errorlevel%

echo Copying Vivaldi Web Data to vivaldi.db...
copy /y %VIVALDI_PROFILE%\"Web Data" vivaldi.db
if %errorlevel% neq 0 exit /b %errorlevel%

echo Exporting Chrome 'keywords' table to keywords.csv...
%SQLITE3% chrome.db -bail -header -csv "select * from keywords;" > keywords.csv
if %errorlevel% neq 0 exit /b %errorlevel%

echo Importing keywords.csv to vivaldi.db as new table 'keywords_temp'
%SQLITE3% vivaldi.db -bail -cmd ".mode csv" -cmd ".import keywords.csv keywords_temp" .exit
if %errorlevel% neq 0 exit /b %errorlevel%

echo Moving 'keywords_temp' table data to the 'keywords' table...
%SQLITE3% vivaldi.db -bail -init %SCRIPTDIR%\vivaldi-keywords-insert.sql .exit
if %errorlevel% neq 0 exit /b %errorlevel%

echo Renaming vivaldi.db to 'Web Data'...
move /y vivaldi.db "Web Data"
if %errorlevel% neq 0 exit /b %errorlevel%

echo Cleaning up temporary files...
del chrome.db keywords.csv
if %errorlevel% neq 0 exit /b %errorlevel%

echo All done!
echo Now copy 'Web Data' back into your profile :)
echo Make sure to close the browser first!

pause
