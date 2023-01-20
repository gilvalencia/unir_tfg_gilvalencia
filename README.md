# unir_tfg_gilvalencia
<h3> Repositorio de código fuente del Diseño de la Propuesta del Trabajo Final del Grado de Ingeniería Informática </h3>
<h3> Universidad Internacional de La Rioja </h3>
__________________________________________________________________________________________________________________________________________________
<h5> <b>Título del Trabajo</b>: Data-Driven Video. Automatización y Control de Proyectos Audiovisuales en Marketing y Publicidad </h5>
<h5> <u>Alumno</u>: José Antonio Gil Valencia</h5>
<h5> <u>Directora</u>: Belén Bermejo González</h5>
<h5> <u>Curso</u>: 2022-2023 </h5>
__________________________________________________________________________________________________________________________________________________
<h4>FICHEROS NECESARIOS</h4>

<h5> Para poder ejecutar el código fuente de la arquitectura propuesta, existen dos ficheros necesarios para ejecutarlo en la máquina destino:</h5>
<ul><h5>-->"unir_tfg_gilvalencia_01": recoge todo el código de la aplicación (Front-End, Back-End y docker-compose para ejecutar los contenedores necesarios y crear el servidor "php-apache" (FICHERO ACCESIBLE EN ESTE MISMO REPOSITORIO)</h5></ul>
<ul><h5>-->"unir_tfg_gilvalencia_AE": incluye proyecto de Adobe After Effects y los materiales de la pieza audiovisual (<a href="https://drive.google.com/file/d/1AQxBwFAhkOlMAtq45poeyL-uN3n3Vma8/view?usp=share_link">FICHERO DESCARGABLE DESDE ESTE ENLACE</a>)</h5></ul>
<img src="https://github.com/gilvalencia/unir_tfg_gilvalencia/blob/10b07f0203fe1161237aa7ce3ded921093311f53/gifs_explicativos_proyecto/FicherosNecesarios.jpg"   width="500"/>
__________________________________________________________________________________________________________________________________________________
<h4>APLICACIONES NECESARIAS</h4>

<h5> Ejecutar los dos ficheros que forman la arquitectura requiere tener instalados:
<ul><h5>--><a href="https://www.docker.com/products/docker-desktop/">Docker Desktop</a></h5></ul>
<ul><h5>--><a href="https://www.adobe.com/es/products/aftereffects.html">Adobe After Effects</a></h5></ul>
<ul><h5>--><a href="https://www.autohotkey.com/">AutoHotkey</a></h5></ul>
<img src="https://github.com/gilvalencia/unir_tfg_gilvalencia/blob/c16f632f1e35e792ddae52aeba52d8d1f94009ac/gifs_explicativos_proyecto/LogosAplicaciones.png"   width="500"/>
__________________________________________________________________________________________________________________________________________________
<h4>PROCEDIMIENTO DE CONFIGURACIÓN</h4>

<ul>
  <h5>1.-ALOJAMIENTO DE FICHEROS</h5>
    <li>
      <h5>Una vez descargados los dos ficheros, almacenar ambos en la misma ruta (Recomendación: raíz del sistema en Windows(C:)</h5>
    </li>
</ul>
<ul>
  <h5>2.-CORRECCIÓN DE RUTAS EN FICHEROS PARA SU LECTURA</h5>
  <ul>
    <h5>ARCHIVO "src/exts_scripts/script_powerMarkt.js":</h5>
    <li>
      LÍNEA 21: introducir el path donde se encuentre el proyecto de Adobe After Effects en la máquina (FICHERO "unir_tfg_gilvalencia_AE/AE")
    </li>
     <img src="https://github.com/gilvalencia/unir_tfg_gilvalencia/blob/cf86e3e74c3ae6c5838831ca4d083cb4b3c1c54e/gifs_explicativos_proyecto/linea21.jpg"   width="500"/>
    <li>
      LÍNEA 200: ingresar el path donde se encuentra el material "products" en la máquina (FICHERO "unir_tfg_gilvalencia_AE/footage/products")
    </li>
    <img src="https://github.com/gilvalencia/unir_tfg_gilvalencia/blob/cf86e3e74c3ae6c5838831ca4d083cb4b3c1c54e/gifs_explicativos_proyecto/linea200.jpg"   width="500"/>
    <li>
      LÍNEAS 1489-1492-1495: presets de renderizado del módulo de salida de After Effects (VER EN "AJUSTES DE PROYECTO ADOBE AFTER EFFECTS)
    </li>
    <img src="https://github.com/gilvalencia/unir_tfg_gilvalencia/blob/cf86e3e74c3ae6c5838831ca4d083cb4b3c1c54e/gifs_explicativos_proyecto/linea1489.jpg"   width="500"/>
    <li>
      LÍNEA 1529: ingresar el path donde se almacenen los archivos JSON (FICHERO "unir_tfg_gilvalencia_01\\src\\json\\template_powermarkt.json")
    </li>
    <img src="https://github.com/gilvalencia/unir_tfg_gilvalencia/blob/cf86e3e74c3ae6c5838831ca4d083cb4b3c1c54e/gifs_explicativos_proyecto/linea1529.jpg"   width="500"/>
  </ul>
</ul>
__________________________________________________________________________________________________________________________________________________
<h4>CONFIGURACIÓN ADOBE AFTER EFFECTS</h4>

<ul>
  <h5>1.-CARGAR EN PROGRAMA PRESETS DE RENDERIZADO</h5>
    <li>
      <h5>Es necesario instalar los presets de renderizado, ya que a ellos se hace referencia en el formulario web y en el archivo JSON generado. Si no estuviesen instalados, la lectura de los mismos no se realiza y se paraliza la ejecución de la pieza</h5>
    </li>
    <li>
      <h5>Una vez instalado el software Adobe After Effects, lo ejecutamos. Una vez abierto, cargamos el archivo ".ars" ubicado en la ruta  "unir_tfg_gilvalencia_AE/renderQuality_presets/renderQuality_presets.ars"</h5>
    </li>
    <li>
      <h5>Dentro de Adobe AE, seguimos la ruta "Edición/Plantillas/Ajustes de Procesamiento/Cargar..."</h5>
    </li>
    <li>
      <h5>Cargamos el archivo "renderQuality_presets.ars", con todos los presets de renderizado necesarios para la ejecución de la aplicación</h5>
      <img src="https://github.com/gilvalencia/unir_tfg_gilvalencia/blob/main/gifs_explicativos_proyecto/ingreso%20de%20plantillas%20presets%20render.gif"/>
    </li>
</ul>
<ul>
  <h5>2.-COMPROBAR LOS AJUSTES EN VENTANA DE PROCESAMIENTO</h5>
    <li>
      <h5>Dentro de un nuevo proyecto, sin guardar, cree una nueva composición.</h5>
    </li>
    <img src="https://github.com/gilvalencia/unir_tfg_gilvalencia/blob/00ad3c33f03a1b738232d1858792bd5d6312237b/gifs_explicativos_proyecto/chequeoPresets_1.gif"/>
    <li>
      <h5>Una vez creada la composición, seleccione Composición/Añadir a la Cola de Procesamiento"</h5>
    </li>
    <li>
      <h5>Una vez en la Cola de Procesamiento, en el apartado "Módulo de Salida", desplegamos la pestaña para ver los presets de renderizado</h5>
    </li>
    <li>
      <h5>Dentro de estos presets tienen que estar los referentes a las líneas LÍNEAS 1489-1492-1495 del script "script_powerMarkt.js"</h5>
    </li>
     <li>
      <h5>Se cierra la aplicación, y Adobe After Effects estaría listo para su ejecución</h5>
    </li>
</ul>
__________________________________________________________________________________________________________________________________________________
<h4>CONFIGURACIÓN DOCKER</h4>

<ul>
  <h5>1.-CONFIGURACIÓN DE PUERTOS DE LOS CONTENEDORES EN ARCHIVO "docker-compose.yml"</h5>
    <li>
      <h5>Por defecto, viene configurado para el puerto 9090 de su máquina</h5>
    </li>
  <img src="https://github.com/gilvalencia/unir_tfg_gilvalencia/blob/83f1116eacf030bb82414cc44b18ab3eb826bf7a/gifs_explicativos_proyecto/puertoPhpApache.jpg"   width="500"/>
    <li>
      <h5>Si tuviera otro servidor corriendo en ese puerto, tendría que modificarlo</h5>
    </li>
    <li>
      <h5>Lo mismo ocurre con la base de datos "MySQL" (puerto 3306), la aplicación "phpMyAdmin" (puerto 8090) y el contenedor "Mailhog" (puerto 8025)</h5>
    </li>
  <img src="https://github.com/gilvalencia/unir_tfg_gilvalencia/blob/83f1116eacf030bb82414cc44b18ab3eb826bf7a/gifs_explicativos_proyecto/puertoMySQLdatabase.jpg"   width="500"/>
    <li>
      <h5>Si modifica el puerto de la base de datos "MySQL", tendrá que modificar dicho puerto también en el archivo "conexion.php" (LÍNEA 14), ubicado en "unir_tfg_gilvalencia_01/src/conexion.php"</h5>
    <img src="https://github.com/gilvalencia/unir_tfg_gilvalencia/blob/aba93215dcdb4a1b7b5d6da28c7e240cb22491ab/gifs_explicativos_proyecto/modificacionPuertoDataBase.jpg"   width="500"/>
    </li>
</ul>
<ul>
  <h5>2.-EJECUCIÓN DEL ARCHIVO "docker-compose.yml" DESDE LA TERMINAL</h5>
    <li>
      <h5>Para la evaluación de la aplicación, el acceso "login" a la plataforma se ha realizado con un solo usuario y contraseña</h5>
    </li>
    <li>
      <h5>Antes de correr la aplicación, deberá insertarlo dentro de la base de datos a través de la terminal</h5>
    </li>
    <li>
      <h5>Antes de correr la aplicación, deberá insertarlo dentro de la base de datos a través de la terminal</h5>
    </li>
</ul>
<ul>
  <h5>3.-CONFIRMAR QUE SE ESTÁN EJECUTANDO LOS CUATRO CONTENEDORES DESDE TERMINAL Y LA APLICACIÓN "Docker Desktop"</h5>
    <li>
      <h5>Para la evaluación de la aplicación, el acceso "login" a la plataforma se ha realizado con un solo usuario y contraseña</h5>
    </li>
    <li>
      <h5>Antes de correr la aplicación, deberá insertarlo dentro de la base de datos a través de la terminal</h5>
    </li>
    <li>
      <h5>Antes de correr la aplicación, deberá insertarlo dentro de la base de datos a través de la terminal</h5>
    </li>
</ul>
<ul>
  <h5>4.-CREACIÓN DE DATABASE CON USUARIO Y CONTRASEÑA</h5>
    <li>
      <h5>Para la evaluación de la aplicación, el acceso "login" a la plataforma se ha realizado con un solo usuario y contraseña</h5>
    </li>
    <li>
      <h5>Antes de correr la aplicación, deberá insertarlo dentro de la base de datos a través de la terminal</h5>
    </li>
    <li>
      <h5>Antes de correr la aplicación, deberá insertarlo dentro de la base de datos a través de la terminal</h5>
    </li>
</ul>
__________________________________________________________________________________________________________________________________________________
<h4>CONFIGURACIÓN AUTOHOTKEY</h4>






