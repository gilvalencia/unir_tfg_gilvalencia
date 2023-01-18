<?php

/*
TRABAJO FINAL DE GRADO INGENIERÍA INFORMÁTICA - UNIVERSIDAD INTERNACIONAL DE LA RIOJA
"Data-Driven Video: Automatización y Control de Proyectos Audiovisuales en Marketing y Publicidad"
Alumno: José Antonio Gil Valencia
Directora: Belén Bermejo González
Curso: 2022-2023
*/

//--------------------------PREPARACION MAIL-------------------------

$name = $_POST['name'];
$mail = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$results = $_POST['mydata'];
$client = $_POST['cliente'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $name . " \r\n";
$message .= "Cliente: " . $client . " \r\n";
$message .= "Su e-mail es: " . $mail . " \r\n";
$message .= "Teléfono de contacto: " . $phone . " \r\n";
$message .= "Mensaje: " . $_POST['message'] . " \r\n";
$message .= "results: " . $results . " \r\n";
$message .= "Enviado el: " . date('d_m_Y', time());

//--------------------------CREACIÓN DE ARCHIVO PARA DESCARGAR EN SERVIDOR-------------------------

    //--Selecciona en función del cliente--Opción de crear INICIO DE SESIÓN EN LA PLATAFORMA--

if($client === 'makro'){
    $filename = "template_santa_makro.json";
    $asunto = 'MAKRO_SANTA';
}
else if($client === 'edp'){
    $filename = "template_powermarkt.json";
    $filename_date = 'template_powerMarkt_'.date('m-d-Y_hia').'.json';
    $asunto = 'PowerMarkt_BOM';
}

    //--Creación de Archivos: UNO GENÉRICO PARA CLIENTE (SELECCIONADO POR PROYECTO SCRIPT AE) y OTRO DE ALMACENAMIENTO

file_put_contents('json/'.$filename, $results);
file_put_contents('json/'.$filename_date, $results);

//--------------------------ENVIO DE MAIL AVISO DE CLIENTE-------------------------

$para = 'creative_inputs_bom@brandsofmedia.com';

mail($para, $asunto, utf8_decode($message), $header);

//--------------------------REGRESO A FRONT END ENVIADO POR CLIENTE-------------------------

header("Location:sent.html");
?>