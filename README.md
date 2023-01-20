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
      LÍNEA 21: corregir el path donde se encuentre el proyecto de Adobe After Effects en la máquina (FICHERO "unir_tfg_gilvalencia_AE/AE")
    </li>
     <img src="https://github.com/gilvalencia/unir_tfg_gilvalencia/blob/cf86e3e74c3ae6c5838831ca4d083cb4b3c1c54e/gifs_explicativos_proyecto/linea21.jpg"   width="500"/>
    <li>
      LÍNEA 200: corregir el path donde se encuentra el material "products" en la máquina (FICHERO "unir_tfg_gilvalencia_AE/footage/products")
    </li>
    <img src="https://github.com/gilvalencia/unir_tfg_gilvalencia/blob/cf86e3e74c3ae6c5838831ca4d083cb4b3c1c54e/gifs_explicativos_proyecto/linea200.jpg"   width="500"/>
    <li>
      LÍNEAS 1489-1492-1495: presets de renderizado del módulo de salida de After Effects (VER EN "AJUSTES DE PROYECTO ADOBE AFTER EFFECTS)
    </li>
    <img src="https://github.com/gilvalencia/unir_tfg_gilvalencia/blob/cf86e3e74c3ae6c5838831ca4d083cb4b3c1c54e/gifs_explicativos_proyecto/linea1489.jpg"   width="500"/>
    <li>
      LÍNEA 1529: corregir el path donde se almacenan los archivos JSON (FICHERO "unir_tfg_gilvalencia_01\\src\\json\\template_powermarkt.json")
    </li>
    <img src="https://github.com/gilvalencia/unir_tfg_gilvalencia/blob/cf86e3e74c3ae6c5838831ca4d083cb4b3c1c54e/gifs_explicativos_proyecto/linea1529.jpg"   width="500"/>
  </ul>
  <ul>
    <h5>ARCHIVO .CMD DE TERMINAL "unir_tfg_gilvalencia_01/ae_projects/open_ae_script.cmd":</h5>
    <li>
      LÍNEA 3: Si al instalar Adobe After Effects lo ha ubicado en una ruta diferente a la establecida por defecto en la instalación, debe cambiar la ruta donde se encuentre el ejecutable ".exe" de la aplicación. Si no es así, por defecto es la ruta indicada en "Support Files"
    </li>
     <li>
      LÍNEA 4: corregir el path de ubicación del archivo "unir_tfg_gilvalencia_01/src/exts_scripts/script_powerMarkt.js"
    </li>
     <img src="https://github.com/gilvalencia/unir_tfg_gilvalencia/blob/c9c9a79f64da8b1e7dcb39f20edfc5bbf52fa0f6/gifs_explicativos_proyecto/script_Terminal.jpg"   width="500"/>
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
      <h5>Dentro de la terminal, accedemos con el comando "cd" a la ruta en la que se encuentre el archivo "docker-compose.yml"</h5>
    </li>
     <img src="https://github.com/gilvalencia/unir_tfg_gilvalencia/blob/ff7083e93522fea9c16b186cf8bb5d340098381a/gifs_explicativos_proyecto/accesoRaizProyecto_1.gif"/>
    <li>
      <h5>Una vez en dicha ruta, ejecutamos el "docker-compose.yml" con el comando "docker-composer up -d"</h5>
    </li>
    <li>
      <h5>Cuando termine el proceso, estará creado el servidor "php-apache"</h5>
    </li>
</ul>
<ul>
  <h5>3.-CONFIRMAR QUE SE ESTÁN EJECUTANDO LOS CUATRO CONTENEDORES DESDE TERMINAL Y LA APLICACIÓN "Docker Desktop"</h5>
    <li>
      <h5>Desde la terminal, ejecutamos el cmd "docker ps" para ver qué contenedores están en ejecución. Deben estar los cuatro contenedores creados</h5>
    </li>
  <img src="https://github.com/gilvalencia/unir_tfg_gilvalencia/blob/c673f5a398945cb03f999571743319f1e3ffcf05/gifs_explicativos_proyecto/contenedoresUpDocker_1.gif"/>
    <li>
      <h5>En la aplicación "Docker Desktop", aparecerán los proyectos guardados en "Docker". Al abrir la raíz del nuestro, aparecerán los cuatro contenedores creados</h5>
    </li>
    <img src="https://github.com/gilvalencia/unir_tfg_gilvalencia/blob/c673f5a398945cb03f999571743319f1e3ffcf05/gifs_explicativos_proyecto/dockerDesktop_1.gif"/>
</ul>
<ul>
  <h5>4.-ACCESO A BASE DE DATOS E INSERCIÓN DE USUARIO Y CONTRASEÑA PARA EL ACCESO A LA PLATAFORMA</h5>
    <li>
      <h5>Para la evaluación de la aplicación, el acceso "login" a la plataforma se ha realizado con un solo usuario y contraseña</h5>
    </li>
    <li>
      <h5>Antes de correr la aplicación, deberá insertarlo dentro de la base de datos a través de la terminal</h5>
    </li>
    <img src="https://github.com/gilvalencia/unir_tfg_gilvalencia/blob/a94c50f9c67f500f307d391b5228698f042374c3/gifs_explicativos_proyecto/database_01.gif"/>
    <li>
      <h5>Acceder a la base de datos con el comando "docker exec -it db /bin/bash</h5>
    </li>
    <li>
      <h5>El contenedor solicitará el acceso "root", donde añadimos la expresión de acceso "mysql -uroot -p"</h5>
    </li>
    <li>
      <h5>La contraseña de acceso es la indicada en el archivo "docker-compose.yml" en el momento de la creación del contenedor. En nuestro caso, para esta aplicación se generó la contraseña "brandsofmedia", en referencia a la Agencia de Publicidad ficticia generada para este proyecto TFG</h5>
    </li>
  <img src="https://github.com/gilvalencia/unir_tfg_gilvalencia/blob/a94c50f9c67f500f307d391b5228698f042374c3/gifs_explicativos_proyecto/database_02.gif"/>
    <li>
      <h5>Una vez dentro de la base de datos, solicitamos mostrar las bases de datos existentes con el comando "show databases;"</h5>
    </li>
    <li>
      <h5>Crearemos una nueva llamada "usuarios", mediante el comando "create database usuarios;"</h5>
    </li>
    <li>
      <h5>Al usar de nueva el comando "show databases;" veremos que ya está creada</h5>
    </li>
  <img src="https://github.com/gilvalencia/unir_tfg_gilvalencia/blob/a94c50f9c67f500f307d391b5228698f042374c3/gifs_explicativos_proyecto/database_03.gif"/>
    <li>
      <h5>Seleccionamos utilizar nuestra base de datos creada, con el comando "use usuarios;"</h5>
    </li>
    <li>
      <h5>Y creamos una nueva tabla llamada "clientes", con el comando "create table clientes(username varchar(40) primary key not null, password varchar(40));"</h5>
    </li>
    <li>
      <h5>Una vez creada la tabla, la mostramos para comprobar que se ha creado, con el comando "show tables;"</h5>
    </li>
    <li>
      <h5>Finalmente, introducimos un nuevo "username" y su "password" correspondiente en dicha tabla. Seleccionamos la tabla con "select * from clientes;"</h5>
    </li>
    <li>
      <h5>Y, a continuación, insertamos los datos con "insert into clientes values ('powerMarkt_ddv', 'brandsOfMedia_pM');"</h5>
    </li>
  <img src="https://github.com/gilvalencia/unir_tfg_gilvalencia/blob/a94c50f9c67f500f307d391b5228698f042374c3/gifs_explicativos_proyecto/database_04.gif"/>
    <li>
      <h5>Cuando seleccionamos de nuevo la tabla "clientes", "select * from clientes;", aparecerán los datos insertados en la tabla</h5>
    </li>
</ul>
__________________________________________________________________________________________________________________________________________________
<h4>CONFIGURACIÓN AUTOHOTKEY</h4>

<ul>
  <h5>1.-MODIFICAR ARCHIVO "unir_tfg_gilvalencia_01/src/json/_openAE_script.ahk"</h5>
    <li>
      <h5>LÍNEA 24: corregir la ubicación del archivo script de la terminal .cmd "unir_tfg_gilvalencia_01/ae_projects/open_ae_script.cmd" </h5>
    </li>
  <img src="https://github.com/gilvalencia/unir_tfg_gilvalencia/blob/95530542171da16fa1a6b801c69f38503398e248/gifs_explicativos_proyecto/autoHotKey.jpg"/>
</ul>
<ul>
  <h5>2.-EJECUTAR ARCHIVO CON LA APLICACIÓN AUTOHOTKEY "unir_tfg_gilvalencia_01/src/json/_openAE_script.ahk"</h5>
    <li>
      <h5>Esto arrancará la aplicación y permanecerá escuchando cualquier actividad que detone el script</h5>
    </li>
  <img src="https://github.com/gilvalencia/unir_tfg_gilvalencia/blob/788246d6fce15e1159bc88620d5a2dbb3e3d0c79/gifs_explicativos_proyecto/autoHoyKey_1.gif"/>
</ul>

__________________________________________________________________________________________________________________________________________________
<h3>INICIO DE LA APLICACIÓN WEB</h3>

<ul>
  <h5>Una vez ajustada la máquina, podemos comenzar a utilizar la aplicación</h5>
    <li>
      <h5>Abrir el navegador por defecto de su máquina, y establecer la URL "http://localhost:9090/", o el número de puerto que pusiera en la configuración del servidor "php-apache" en Docker</h5>
    </li>
  <img src="https://github.com/gilvalencia/unir_tfg_gilvalencia/blob/55e0c9ffce63a711fb19c5e74140c6456bd6b90a/gifs_explicativos_proyecto/usoAplicacion01.gif"/>
    <li>
      <h5>Introducir usuario y contraseña en el "login" de la plataforma de la Agencia de Publicidad ("Brands Of Media", agencia ficticia para este trabajo)</h5>
    </li>
  <img src="https://github.com/gilvalencia/unir_tfg_gilvalencia/blob/55e0c9ffce63a711fb19c5e74140c6456bd6b90a/gifs_explicativos_proyecto/usoAplicacion02.gif"/>
    <li>
      <h5>Una vez dentro, rellenar el formulario web de la creatividad de la campaña de la marca ("PowerMarkt", anunciante ficticio para este trabajo)</h5>
    </li>
  <img src="https://github.com/gilvalencia/unir_tfg_gilvalencia/blob/55e0c9ffce63a711fb19c5e74140c6456bd6b90a/gifs_explicativos_proyecto/usoAplicacion03.gif"/>
    <li>
      <h5>Cuando finalice, se efectúa el envío para la ejecución de la pieza en el software creativo audiovisual</h5>
    </li>
  <img src="https://github.com/gilvalencia/unir_tfg_gilvalencia/blob/55e0c9ffce63a711fb19c5e74140c6456bd6b90a/gifs_explicativos_proyecto/usoAplicacion04.gif"/>
</ul>


