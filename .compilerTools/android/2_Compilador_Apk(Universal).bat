@echo off
setlocal

rem Nombre del archivo de bundle (AAB)
set AAB_FILE=app.aab

rem Nombre del archivo de salida APK
set APK_FILE=app.apks

rem Ruta al archivo bundletool.jar
set BUNDLETOOL_JAR=bundletool.jar

rem Ruta al archivo de keystore
set KEYSTORE_FILE=key.keystore

rem Alias del keystore
set KEY_ALIAS=mykeyalias

rem Contraseña del keystore
set KEYSTORE_PASS=password123123123123

rem Contraseña del alias
set KEY_PASS=password123123123123

rem Comando para generar el APK
java -jar %BUNDLETOOL_JAR% build-apks --bundle=%AAB_FILE% --output=%APK_FILE% --ks=%KEYSTORE_FILE% --ks-pass=pass:%KEYSTORE_PASS% --ks-key-alias=%KEY_ALIAS% --key-pass=pass:%KEY_PASS% --mode=universal

echo.
echo APK generado exitosamente en: %APK_FILE%
echo.

pause
