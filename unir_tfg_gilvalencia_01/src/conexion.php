<?php

/*
TRABAJO FINAL DE GRADO INGENIERÍA INFORMÁTICA - UNIVERSIDAD INTERNACIONAL DE LA RIOJA
"Data-Driven Video: Automatización y Control de Proyectos Audiovisuales en Marketing y Publicidad"
Alumno: José Antonio Gil Valencia
Directora: Belén Bermejo González
Curso: 2022-2023
*/

$nombre = $_POST['nombre'];
$pass = $_POST['password'];

$con = mysqli_connect("db:3306","root","brandsofmedia","usuarios");
$query = "select * from clientes where username='".$nombre."' and password='".$pass."'";

if($con){
    $result = mysqli_query($con, $query);
    if ($result->num_rows > 0){
        if($nombre === 'powerMarkt_ddv'){
            header("Location:dataform_powerMarkt.html");
        }
        else if($nombre === 'makro_santa'){
            header("Location:dataform_santa_makro.html");
        }
        else{
            header("Location:ddv_admin_bom.html");
        }
        
    }
    else{
        header("Location:index_access_error.html");
    }
}
else{
    header("Location:index_not_connected.html");
}

?>