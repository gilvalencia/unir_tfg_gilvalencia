<?php

/*
TRABAJO FINAL DE GRADO INGENIERÍA INFORMÁTICA - UNIVERSIDAD INTERNACIONAL DE LA RIOJA
"Data-Driven Video: Automatización y Control de Proyectos Audiovisuales en Marketing y Publicidad"
Alumno: José Antonio Gil Valencia
Directora: Belén Bermejo González
Curso: 2022-2023
*/

    if (isset($_POST['btnsalir'])) {
        header("Location:index.html");
    } else if (isset($_POST['btnback'])) {
        header("Location:dataform_reprise_edp.html");
    } else {
        //no button pressed
    }
    
    exit;
?>