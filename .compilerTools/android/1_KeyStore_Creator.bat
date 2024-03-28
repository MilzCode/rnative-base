@echo off
setlocal

rem Obtener la ubicación del archivo batch
set SCRIPT_DIR=%~dp0

rem Nombre del archivo de keystore
set KEYSTORE_FILE=%SCRIPT_DIR%key.keystore

rem Alias del keystore
set KEY_ALIAS=mykeyalias

rem Contraseña del keystore
set KEYSTORE_PASS=password123123123123

rem Contraseña del alias
set KEY_PASS=password123123123123

rem Nombre completo
set FULL_NAME=John Doe

rem Unidad organizativa
set ORG_UNIT=IT Department

rem Nombre de la organización
set ORG_NAME=Acme Corporation

rem Ciudad
set CITY=Cityville

rem Estado o provincia
set STATE=Stateville

rem Código del país
set COUNTRY=US

rem Generar el keystore
keytool -genkeypair -v -keystore "%KEYSTORE_FILE%" -alias %KEY_ALIAS% -keyalg RSA -keysize 2048 -validity 10000 -storepass %KEYSTORE_PASS% -keypass %KEY_PASS% -dname "CN=%FULL_NAME%, OU=%ORG_UNIT%, O=%ORG_NAME%, L=%CITY%, S=%STATE%, C=%COUNTRY%"

echo.
echo Keystore generado exitosamente en: %KEYSTORE_FILE%
echo.

pause
