1. Para ejecutar estas herramientas de compilación se debe dejar acá el .aab que genera expo y cambiarle el nombre a "app.aab"
2. Luego se debe ejecutar el archivo 1_KeyStore_Creator.bat
3. Luego se debe ejecutar el archivo 2_Compilador_Apk.bat. Tambien esta la version que dice 2_Compilador_Apk(Universal).bat, la diferencia es que la version universal genera un solo apk para todas las arquitecturas, mientras que la version normal genera un apk por cada arquitectura.
4. Luego se generara un archivo app.apks que debes descomprimir y luego instalar el apk que corresponda a tu arquitectura (A menos que uses universal en ese caso funciona con todos).


Porfavor es imortante revisar estos bat y customisar contraseñas y modos de compilación.

Requisitos:

1. Tener instalado el JDK de java, sino lo tienes puedes ir a este enlace: www.oracle.com/cl/java/technologies/downloads.
2. Tener configurada la herramienta keytool, sino puedes seguir las siguientes instrucciones (valido para windows):

  1. Si ya tienes instalado el JDK pero el comando keytool aún no está disponible, es posible que necesites agregar la ruta del directorio binario del JDK a la variable de entorno PATH de tu sistema. La ruta típica del directorio binario del JDK es C:\Program Files\Java\jdk1.x.x\bin en sistemas Windows. Puedes seguir estos pasos para agregar la ruta:

  2. Abre el Panel de control en tu computadora.
  Ve a "Sistema y seguridad" > "Sistema" > "Configuración avanzada del sistema".
  En la pestaña "Opciones avanzadas", haz clic en "Variables de entorno".
  En la sección "Variables del sistema", busca la variable PATH y haz clic en "Editar...".
  En la ventana de edición, haz clic en "Nuevo" y agrega la ruta al directorio binario del JDK (por ejemplo, C:\Program Files\Java\jdk1.x.x\bin).
  Guarda los cambios y cierra todas las ventanas.

  3. Reinicia tu terminal o símbolo del sistema: Después de agregar la ruta del JDK a la variable PATH, cierra y vuelve a abrir tu terminal o símbolo del sistema para que los cambios surtan efecto.