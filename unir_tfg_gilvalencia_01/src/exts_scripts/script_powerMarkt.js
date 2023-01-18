/*
TRABAJO FINAL DE GRADO INGENIERÍA INFORMÁTICA - UNIVERSIDAD INTERNACIONAL DE LA RIOJA
"Data-Driven Video: Automatización y Control de Proyectos Audiovisuales en Marketing y Publicidad"
Alumno: José Antonio Gil Valencia
Directora: Belén Bermejo González
Curso: 2022-2023
*/

//-------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------FUNCTIONS-----------------------------------------------------------
//-----------------------------------------------FUNCTIONS-----------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------

#include 'json2.js'

//-------------------------------------------------------------------------------------------------------------------

//FUNCIONES DE APERTURA DE PROYECTO Y CIERRE DE APLICACIÓN SIN AUTOGUARDADO

function openProject(){
    var fileProject = File("C:\\Users\\gilva\\Projects\\unir_tfg_gilvalencia_AE\\AE\\black_friday_campaign.aep");
    if(fileProject.exists){
        app.open(fileProject);
    }
    else{
        alert("¡¡¡No existe el archivo de Proyecto especificado en el servidor!!!");
    }
}

function appQuit(){
    app.beginSuppressDialogs();
    app.quit();
    app.endSuppressDialogs(alert);
}

//-------------------------------------------------------------------------------------------------------------------

//FUNCIÓN LECTURA JSON FILE
function readJsonFile(jsonFile){
    jsonFile.open("r");
    var json = jsonFile.read();
    jsonFile.close();
    return JSON.parse(json);
}

//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------

//FUNCIÓN SPOT VERSION

function compositionVersionModify(data){

    //SELECCIÓN DE OBJETO - DATO EN ARCHIVO JSON(data)

        spotVersion = data.version_spot;

    //SELECCIÓN DE OBJETOS - LAYERS EN COMPOSICIÓN A MODIFICAR EN TIMELINE SEGÚN VERSIÓN

        render_composition = app.project.item(1);

        scene_composition = app.project.item(3);

        comp01_intro_BF = app.project.item(3).layer(11);
        comp01_intro_BF_en_PM = app.project.item(3).layer(10);

        comp02_producto01 = app.project.item(3).layer(9);
        shapeLayer01_producto01 = app.project.item(3).layer(8);
        shapeLayer02_producto01 = app.project.item(3).layer(7);

        comp03_producto02 = app.project.item(3).layer(6);
        shapeLayer01_producto02 = app.project.item(3).layer(5);
        shapeLayer02_producto02 = app.project.item(3).layer(4);

        comp06_outro = app.project.item(3).layer(3);
        shapeLayer01_outro = app.project.item(3).layer(2);
        shapeLayer02_outro = app.project.item(3).layer(1);

    //MODIFICACIÓN DE TIEMPOS DE ENTRADA EN TIMELINE SEGÚN VERSIÓN DE SPOT SELECCIONADA POR CLIENTE EN JSON FILE

        if(spotVersion == "10"){
            
            //Deshabilitar Intro V20segundos y habilitar Intro V10segundos
                comp01_intro_BF_en_PM.enabled = false;
                comp01_intro_BF.enabled= true;

            //Modificar punto de entrada de resto de composiciones para ajustarse a la V10segundos
                comp02_producto01.startTime = 2.11;               
                shapeLayer01_producto01.startTime = 2.11;
                shapeLayer02_producto01.startTime = 2.11;

                comp03_producto02.startTime = 5.00;
                shapeLayer01_producto02.startTime = 5.00;
                shapeLayer02_producto02.startTime = 5.00;

                comp06_outro.startTime = 7.16;
                shapeLayer01_outro.startTime = 7.16;
                shapeLayer02_outro.startTime = 7.16;

            //Modificar Tiempo de Entrada y Tiempo de Salida para Renderizado
                render_composition.workAreaStart = 0;
                render_composition.workAreaDuration = 10;

        }
        else{
            
            //Deshabilitar Intro V10segundos y habilitar Intro V20segundos
                comp01_intro_BF_en_PM.enabled = true;
                comp01_intro_BF.enabled= false;

            //Modificar punto de entrada de resto de composiciones para ajustarse a la V10segundos
                comp02_producto01.startTime = 5.14;               
                shapeLayer01_producto01.startTime = 5.16;
                shapeLayer02_producto01.startTime = 5.16;

                comp03_producto02.startTime = 10.08;
                shapeLayer01_producto02.startTime = 10.08;
                shapeLayer02_producto02.startTime = 10.08;

                comp06_outro.startTime = 15.04;
                shapeLayer01_outro.startTime = 15.04;
                shapeLayer02_outro.startTime = 15.04;
            
            //Modificar Tiempo de Entrada y Tiempo de Salida para Renderizado
                render_composition.workAreaStart = 0;
                render_composition.workAreaDuration = 20;

       }

}

//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------

//FUNCIÓN REEMPLAZO FOOTAGE PRODUCTOS

function replaceFootage(panelProjectItemNumber, footageName){
    var comp1_image = app.project.item(panelProjectItemNumber);
    var comp1_image_name = footageName;

    if(footageName == "altavozJBL"){
        comp1_image_name = "altavozJBL_shutterstock_2128489079.png";
    }
    else if(footageName == "altavozSmallJBL"){
        comp1_image_name = "altavozSmallJBL_shutterstock_2152129111.png";
    }
    else if(footageName == "aspiradora"){
        comp1_image_name = "aspiradora_shutterstock_1308750640.png";
    }
    else if(footageName == "aspiradoraRobot"){
        comp1_image_name = "aspiradoraRobot_shutterstock_1807112131.png";
    }
    else if(footageName == "cafeteraDeLonghi"){
        comp1_image_name = "cafeteraDeLonghi_shutterstock_737839330.png";
    }
    else if(footageName == "cafeteraNespresso"){
        comp1_image_name = "nespresso_shutterstock_170390120.png";
    }
    else if(footageName == "depiladora"){
        comp1_image_name = "depiladora_shutterstock_81121072.png";
    }
    else if(footageName == "earphoneWireless"){
        comp1_image_name = "earphoneWireless_shutterstock_1679626627.png";
    }
    else if(footageName == "ipod"){
        comp1_image_name = "ipodNano_shutterstock_1587651892.png";
    }
    else if(footageName == "mandoXbox"){
        comp1_image_name = "mandoXbox_shutterstock_1794673189.png";
    }
    else if(footageName == "planchaPelo"){
        comp1_image_name = "planchaPelo_shutterstock_268143548.png";
    }
    else if(footageName == "drone"){
        comp1_image_name = "drone_shutterstock_1919139251.png";
    }
    else if(footageName == "earphone"){
        comp1_image_name = "earphone_shutterstock_1935685894.png";
    }
    else if(footageName == "patinete"){
        comp1_image_name = "patinete_shutterstock_1293070354.png";
    }
    else if(footageName == "camara"){
        comp1_image_name = "reflexCam_shutterstock_741760732.png";
    }
    else if(footageName == "smartphone"){
        comp1_image_name = "smartphone_shutterstock_1433190200.png";
    }
    else if(footageName == "classicWatch"){
        comp1_image_name = "watch_shutterstock_2067261644.png";
    }
    else if(footageName == "watch"){
        comp1_image_name = "watch_shutterstock_788791027.png";
    }
    else{
        alert("ATENCIÓN: No existe el archivo seleccionado en el servidor.");
    }

    comp1_image.name = comp1_image_name;

    var myPath = "C:\\Users\\gilva\\Projects\\unir_tfg_gilvalencia_AE\\footage\\products\\"+comp1_image_name;

    comp1_image.replace(File(myPath));
}

//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------

//FUNCIÓN MODIFICACIÓN FORMULARIO - VIÑETA 1 - INTRO 20 SEGUNDOS - COMPOSICIÓN INTRO 20 SEGUNDOS

function textIntro20Properties(data){

    //CONTENIDO NOMBRE CAMPANA

        //VALORES DEL ARCHIVO JSON (var data)
        nombreCampanaColor = data.campaign_name_color;
        nombreCampana = data.campaign_name;

        //VARIABLE DEL ITEM 6 DE PROYECTO, CAPA 11, PROPIEDAD "SOURCETEXT"

        var textCampaignProp = app.project.item(6).layer(15).property("Source Text");
        var textCampaignDocument = textCampaignProp.value;
        myStringCampaign = nombreCampana;
    
        //RESETEO DE TEXTO EN CAPA Y AJUSTE TAMAÑO DE FUENTE

        textCampaignDocument.resetCharStyle();
        textCampaignDocument.fontSize = 219;

        //COLOR DE FUENTE

        if(nombreCampanaColor == "blanco"){
            textCampaignDocument.fillColor = [1, 1, 1];
        }
        else if(nombreCampanaColor == "rojo"){
            textCampaignDocument.fillColor = [169/255, 0, 0];
        }
        else{
            textCampaignDocument.fillColor = [0, 0, 0];
        }
    
        //TIPOGRAFÍA DE FUENTE, SEPARACIÓN CARACTERES Y LÍNEAS, NEGRITA Y CONTENIDO DE TEXTO

        textCampaignDocument.font = 'Montserrat-Black';
        textCampaignDocument.tracking = 89;
        textCampaignDocument.leading = 217;
        textCampaignDocument.setFauxBold = true;
        textCampaignDocument.text = myStringCampaign;
        textCampaignProp.setValue(textCampaignDocument);

    //CONTENIDO TEXTO1

        //VALORES DEL ARCHIVO JSON (var data)

        texto1_color = data.text1_color;
        texto1 = data.text1;
        colorBorde = data.border_color;

        //VARIABLE DEL ITEM 6 DE PROYECTO, CAPA 7, PROPIEDAD "SOURCETEXT"

        var text1Prop = app.project.item(6).layer(7).property("Source Text");
        var text1Document = text1Prop.value;
        myStringText1 = texto1;
    
        //RESETEO DE TEXTO EN CAPA Y AJUSTE TAMAÑO DE FUENTE

        text1Document.resetCharStyle();
        if(texto1.length <= 12){
            text1Document.fontSize = 55;
        }
        else if(texto1.length > 12 && texto1.length <= 15){
            text1Document.fontSize = 50;
        }
        else if(texto1.length > 15){
            text1Document.fontSize = 45;
        }

        //COLOR DE FUENTE

        if(texto1_color == "blanco"){
            text1Document.fillColor = [1, 1, 1];
        }
        else if(texto1_color == "rojo"){
            text1Document.fillColor = [169/255, 0, 0];
        }
        else{
            text1Document.fillColor = [0, 0, 0];
        }

        if(colorBorde == "blanco"){
            text1Document.fillColor = [0, 0, 0];
        }
    
        //TIPOGRAFÍA DE FUENTE, SEPARACIÓN CARACTERES Y LÍNEAS, NEGRITA Y CONTENIDO DE TEXTO

        text1Document.font = 'Montserrat-Black';
        text1Document.tracking = 0;
        text1Document.leading = 74;
        text1Document.setFauxBold = false;
        text1Document.text = myStringText1;
        text1Prop.setValue(text1Document);

    //CONTENIDO TEXTO2

        //VALORES DEL ARCHIVO JSON (var data)

        texto2_color = data.text2_color;
        texto2 = data.text2;

       //VARIABLE DEL ITEM 6 DE PROYECTO, CAPA 10, PROPIEDAD "SOURCETEXT"

        var text2Prop = app.project.item(6).layer(14).property("Source Text");
        var text2Document = text2Prop.value;
        myStringText2 = texto2;
       
       //RESETEO DE TEXTO EN CAPA Y AJUSTE TAMAÑO DE FUENTE

        text2Document.resetCharStyle();
        if(texto2_color.length <= 24){
            text2Document.fontSize = 219;
        }
        else if(texto2_color.length > 24 && texto2_color.length <= 30){
            text2Document.fontSize = 209;
        }
        else if(texto2_color.length > 30){
            text2Document.fontSize = 199;
        }
   
       //COLOR DE FUENTE
   
        if(texto2_color == "blanco"){
            text2Document.fillColor = [1, 1, 1];
        }
        else if(texto2_color == "rojo"){
            text2Document.fillColor = [169/255, 0, 0];
        }
        else{
            text2Document.fillColor = [0, 0, 0];
        }
       
       //TIPOGRAFÍA DE FUENTE, SEPARACIÓN CARACTERES Y LÍNEAS, NEGRITA Y CONTENIDO DE TEXTO
   
        text2Document.font = 'Montserrat-Regular';
        text2Document.tracking = 47;
        text2Document.leading = 217;
        text2Document.setFauxBold = false;
        text2Document.text = myStringText2;
        text2Prop.setValue(text2Document);

    //COLOR PASTILLA-BANNER

        //VALORES DEL ARCHIVO JSON (var data)

        //SELECCIÓN DE CAPAS EN COMPOSICIÓN

        bannerPastillaRojo = app.project.item(6).layer(12);
        bannerBorderRojo = app.project.item(6).layer(13);

        bannerPastillaBlanco = app.project.item(6).layer(10);
        bannerBorderBlanco = app.project.item(6).layer(11);

        bannerPastillaNegro = app.project.item(6).layer(8);
        bannerBorderNegro = app.project.item(6).layer(9);

        fondoComposicionBlanco = app.project.item(6).layer(20);
        fondoComposicionNegro = app.project.item(6).layer(21);

        particulasComposicionRojo = app.project.item(6).layer(19);
        particulasComposicionBlanco = app.project.item(6).layer(18);
        particulasComposicionNegro = app.project.item(6).layer(17);

        //MODIFICACIÓN DE COLOR PASTILLA-BANNER Y FONDO

        if(colorBorde == "blanco"){

            bannerPastillaRojo.enabled = false;
            bannerBorderRojo.enabled = false;
            bannerPastillaBlanco.enabled = true;
            bannerBorderBlanco.enabled = true;
            bannerPastillaNegro.enabled = false;
            bannerBorderNegro.enabled = false;

            fondoComposicionBlanco.enabled = false;
            fondoComposicionNegro.enabled = true;

            particulasComposicionRojo.enabled = false;
            particulasComposicionBlanco.enabled = true;
            particulasComposicionNegro.enabled = false;

        }
        else if(colorBorde == "negro"){
            bannerPastillaRojo.enabled = false;
            bannerBorderRojo.enabled = false;
            bannerPastillaBlanco.enabled = false;
            bannerBorderBlanco.enabled = false;
            bannerPastillaNegro.enabled = true;
            bannerBorderNegro.enabled = true;

            fondoComposicionBlanco.enabled = true;
            fondoComposicionNegro.enabled = false;

            particulasComposicionRojo.enabled = false;
            particulasComposicionBlanco.enabled = false;
            particulasComposicionNegro.enabled = true;
        }
        else{
            bannerPastillaRojo.enabled = true;
            bannerBorderRojo.enabled = true;
            bannerPastillaBlanco.enabled = false;
            bannerBorderBlanco.enabled = false;
            bannerPastillaNegro.enabled = false;
            bannerBorderNegro.enabled = false;

            fondoComposicionBlanco.enabled = false;
            fondoComposicionNegro.enabled = true;

            particulasComposicionRojo.enabled = true;
            particulasComposicionBlanco.enabled = false;
            particulasComposicionNegro.enabled = false;
        }

}

//FUNCIÓN MODIFICACIÓN FORMULARIO - VIÑETA 1 - INTRO 10 SEGUNDOS - COMPOSICIÓN INTRO 10 SEGUNDOS

function textIntro10Properties(data){

    //CONTENIDO NOMBRE CAMPANA

        //VALORES DEL ARCHIVO JSON (var data)
        nombreCampanaColor = data.campaign_name_color;
        nombreCampana = data.campaign_name;

        //VARIABLE DEL ITEM 5 DE PROYECTO, CAPA 12, PROPIEDAD "SOURCETEXT"

        var textCampaignProp = app.project.item(5).layer(12).property("Source Text");
        var textCampaignDocument = textCampaignProp.value;
        myStringCampaign = nombreCampana;
    
        //RESETEO DE TEXTO EN CAPA Y AJUSTE TAMAÑO DE FUENTE

        textCampaignDocument.resetCharStyle();
        textCampaignDocument.fontSize = 219;

        //COLOR DE FUENTE

        if(nombreCampanaColor == "blanco"){
            textCampaignDocument.fillColor = [1, 1, 1];
        }
        else if(nombreCampanaColor == "rojo"){
            textCampaignDocument.fillColor = [169/255, 0, 0];
        }
        else{
            textCampaignDocument.fillColor = [0, 0, 0];
        }
    
        //TIPOGRAFÍA DE FUENTE, SEPARACIÓN CARACTERES Y LÍNEAS, NEGRITA Y CONTENIDO DE TEXTO

        textCampaignDocument.font = 'Montserrat-Black';
        textCampaignDocument.tracking = 89;
        textCampaignDocument.leading = 217;
        textCampaignDocument.setFauxBold = true;
        textCampaignDocument.text = myStringCampaign;
        textCampaignProp.setValue(textCampaignDocument);

    //CONTENIDO TEXTO1

        //VALORES DEL ARCHIVO JSON (var data)

        texto1_color = data.text1_color;
        texto1 = data.text1;
        colorBorde = data.border_color;

        //VARIABLE DEL ITEM 5 DE PROYECTO, CAPA 4, PROPIEDAD "SOURCETEXT"

        var text1Prop = app.project.item(5).layer(4).property("Source Text");
        var text1Document = text1Prop.value;
        myStringText1 = texto1;
    
        //RESETEO DE TEXTO EN CAPA Y AJUSTE TAMAÑO DE FUENTE

        text1Document.resetCharStyle();
        if(texto1.length <= 12){
            text1Document.fontSize = 55;
        }
        else if(texto1.length > 12 && texto1.length <= 15){
            text1Document.fontSize = 50;
        }
        else if(texto1.length > 15){
            text1Document.fontSize = 45;
        }

        //COLOR DE FUENTE

        if(texto1_color == "blanco"){
            text1Document.fillColor = [1, 1, 1];
        }
        else if(texto1_color == "rojo"){
            text1Document.fillColor = [169/255, 0, 0];
        }
        else{
            text1Document.fillColor = [0, 0, 0];
        }

        if(colorBorde == "blanco"){
            text1Document.fillColor = [0, 0, 0];
        }
    
        //TIPOGRAFÍA DE FUENTE, SEPARACIÓN CARACTERES Y LÍNEAS, NEGRITA Y CONTENIDO DE TEXTO

        text1Document.font = 'Montserrat-Black';
        text1Document.tracking = 0;
        text1Document.leading = 74;
        text1Document.setFauxBold = false;
        text1Document.text = myStringText1;
        text1Prop.setValue(text1Document);

    //CONTENIDO TEXTO2

        //VALORES DEL ARCHIVO JSON (var data)

        texto2_color = data.text2_color;
        texto2 = data.text2;

       //VARIABLE DEL ITEM 5 DE PROYECTO, CAPA 11, PROPIEDAD "SOURCETEXT"

        var text2Prop = app.project.item(5).layer(11).property("Source Text");
        var text2Document = text2Prop.value;
        myStringText2 = texto2;
       
       //RESETEO DE TEXTO EN CAPA Y AJUSTE TAMAÑO DE FUENTE

        text2Document.resetCharStyle();
        if(texto2_color.length <= 24){
            text2Document.fontSize = 219;
        }
        else if(texto2_color.length > 24 && texto2_color.length <= 30){
            text2Document.fontSize = 209;
        }
        else if(texto2_color.length > 30){
            text2Document.fontSize = 199;
        }
   
       //COLOR DE FUENTE
   
        if(texto2_color == "blanco"){
            text2Document.fillColor = [1, 1, 1];
        }
        else if(texto2_color == "rojo"){
            text2Document.fillColor = [169/255, 0, 0];
        }
        else{
            text2Document.fillColor = [0, 0, 0];
        }
       
       //TIPOGRAFÍA DE FUENTE, SEPARACIÓN CARACTERES Y LÍNEAS, NEGRITA Y CONTENIDO DE TEXTO
   
        text2Document.font = 'Montserrat-Regular';
        text2Document.tracking = 47;
        text2Document.leading = 217;
        text2Document.setFauxBold = false;
        text2Document.text = myStringText2;
        text2Prop.setValue(text2Document);

    //COLOR PASTILLA-BANNER

        //VALORES DEL ARCHIVO JSON (var data)

        //SELECCIÓN DE CAPAS EN COMPOSICIÓN

        bannerPastillaRojo = app.project.item(5).layer(9);
        bannerBorderRojo = app.project.item(5).layer(10);

        bannerPastillaBlanco = app.project.item(5).layer(7);
        bannerBorderBlanco = app.project.item(5).layer(8);

        bannerPastillaNegro = app.project.item(5).layer(5);
        bannerBorderNegro = app.project.item(5).layer(6);

        fondoComposicionBlanco = app.project.item(5).layer(17);
        fondoComposicionNegro = app.project.item(5).layer(18);

        particulasComposicionRojo = app.project.item(5).layer(16);
        particulasComposicionBlanco = app.project.item(5).layer(15);
        particulasComposicionNegro = app.project.item(5).layer(14);

        //MODIFICACIÓN DE COLOR PASTILLA-BANNER Y FONDO

        if(colorBorde == "blanco"){

            bannerPastillaRojo.enabled = false;
            bannerBorderRojo.enabled = false;
            bannerPastillaBlanco.enabled = true;
            bannerBorderBlanco.enabled = true;
            bannerPastillaNegro.enabled = false;
            bannerBorderNegro.enabled = false;

            fondoComposicionBlanco.enabled = false;
            fondoComposicionNegro.enabled = true;

            particulasComposicionRojo.enabled = false;
            particulasComposicionBlanco.enabled = true;
            particulasComposicionNegro.enabled = false;

        }
        else if(colorBorde == "negro"){
            bannerPastillaRojo.enabled = false;
            bannerBorderRojo.enabled = false;
            bannerPastillaBlanco.enabled = false;
            bannerBorderBlanco.enabled = false;
            bannerPastillaNegro.enabled = true;
            bannerBorderNegro.enabled = true;

            fondoComposicionBlanco.enabled = true;
            fondoComposicionNegro.enabled = false;

            particulasComposicionRojo.enabled = false;
            particulasComposicionBlanco.enabled = false;
            particulasComposicionNegro.enabled = true;
        }
        else{
            bannerPastillaRojo.enabled = true;
            bannerBorderRojo.enabled = true;
            bannerPastillaBlanco.enabled = false;
            bannerBorderBlanco.enabled = false;
            bannerPastillaNegro.enabled = false;
            bannerBorderNegro.enabled = false;

            fondoComposicionBlanco.enabled = false;
            fondoComposicionNegro.enabled = true;

            particulasComposicionRojo.enabled = true;
            particulasComposicionBlanco.enabled = false;
            particulasComposicionNegro.enabled = false;
        }

}

//--------------------------------------------------------------------------------------------------------------

//FUNCIÓN MODIFICACIÓN FORMULARIO - VIÑETA 2 - LOGO1

function textLogo1Properties(data){

    //VALORES DEL ARCHIVO JSON (var data)

        claim1Activar = data.activar_claim1;
        claimLogo1 = data.claim_logo1;
        coloresLogo1 = data.logo1_colores;

    //SELECCIÓN DE CONTENIDO EN COMPOSICIÓN

        var claim1 = app.project.item(30).layer(1);

    //CLAIM ACTIVO

        if(claim1Activar == "off"){
            claim1.enabled = false;
        }
        else{
            claim1.enabled = true;
        }

    //CONTENIDO FUENTE DE TEXTO CLAIM

        var textClaim1Prop = app.project.item(30).layer(1).property("Source Text");
        var textClaimDocument = textClaim1Prop.value;
        myStringClaim1 = claimLogo1;

        //RESETEO DE TEXTO EN CAPA Y AJUSTE TAMAÑO y COLOR DE FUENTE

        textClaimDocument.resetCharStyle();
        textClaimDocument.fontSize = 48;
        textClaimDocument.fillColor = [0, 0, 0];

        //TIPOGRAFÍA DE FUENTE, SEPARACIÓN CARACTERES Y LÍNEAS, NEGRITA Y CONTENIDO DE TEXTO

        textClaimDocument.font = 'Moderat-Black';
        textClaimDocument.tracking = -6;
        textClaimDocument.leading = 205,7;
        textClaimDocument.setFauxBold = false;
        textClaimDocument.text = myStringClaim1;
        textClaim1Prop.setValue(textClaimDocument);

    //MODIFICACIÓN COLORES LOGOTIPO

        //SELECCIÓN DE LAYERS EN COMPOSICIÓN

        var opcion11 = app.project.item(30).layer(14);
        var opcion12 = app.project.item(30).layer(15);
        var opcion13 = app.project.item(30).layer(16);
        var opcion14 = app.project.item(30).layer(17);
        var opcion15 = app.project.item(30).layer(18);
        var opcion16 = app.project.item(30).layer(19);

        var opcion21 = app.project.item(30).layer(8);
        var opcion22 = app.project.item(30).layer(9);
        var opcion23 = app.project.item(30).layer(10);
        var opcion24 = app.project.item(30).layer(11);
        var opcion25 = app.project.item(30).layer(12);
        var opcion26 = app.project.item(30).layer(13);

        var opcion31 = app.project.item(30).layer(2);
        var opcion32 = app.project.item(30).layer(3);
        var opcion33 = app.project.item(30).layer(4);
        var opcion34 = app.project.item(30).layer(5);
        var opcion35 = app.project.item(30).layer(6);
        var opcion36 = app.project.item(30).layer(7);

        if(coloresLogo1 == "opcion2"){
            
            opcion11.enabled = false;
            opcion12.enabled = false;
            opcion13.enabled = false;
            opcion14.enabled = false;
            opcion15.enabled = false;
            opcion16.enabled = false;
            
            opcion21.enabled = true;
            opcion22.enabled = true;
            opcion23.enabled = true;
            opcion24.enabled = true;
            opcion25.enabled = true;
            opcion26.enabled = true;

            opcion31.enabled = false;
            opcion32.enabled = false;
            opcion33.enabled = false;
            opcion34.enabled = false;
            opcion35.enabled = false;
            opcion36.enabled = false;
        }
        else if(coloresLogo1 == "opcion3"){
            opcion11.enabled = false;
            opcion12.enabled = false;
            opcion13.enabled = false;
            opcion14.enabled = false;
            opcion15.enabled = false;
            opcion16.enabled = false;
            
            opcion21.enabled = false;
            opcion22.enabled = false;
            opcion23.enabled = false;
            opcion24.enabled = false;
            opcion25.enabled = false;
            opcion26.enabled = false;

            opcion31.enabled = true;
            opcion32.enabled = true;
            opcion33.enabled = true;
            opcion34.enabled = true;
            opcion35.enabled = true;
            opcion36.enabled = true;
            
        }
        else{
            opcion11.enabled = true;
            opcion12.enabled = true;
            opcion13.enabled = true;
            opcion14.enabled = true;
            opcion15.enabled = true;
            opcion16.enabled = true;
            
            opcion21.enabled = false;
            opcion22.enabled = false;
            opcion23.enabled = false;
            opcion24.enabled = false;
            opcion25.enabled = false;
            opcion26.enabled = false;

            opcion31.enabled = false;
            opcion32.enabled = false;
            opcion33.enabled = false;
            opcion34.enabled = false;
            opcion35.enabled = false;
            opcion36.enabled = false;
        }
}

//--------------------------------------------------------------------------------------------------------------

//FUNCIÓN MODIFICACIÓN FORMULARIO - VIÑETA 3 - PRODUCTO 1

function propertiesForm3(data){

    producto1Posicion = data.posicion1;
    producto1 = data.producto1;
    producto1TextoColor = data.color_texto_producto1;
    producto1Nombre = data.nombre_producto1;
    producto1Precio = data.precio1;
    producto1Caracteristicas = data.caracteristicas1;
    producto1Oferta = data.oferta_producto1;

    //MODIFICACIÓN NOMBRE PRODUCTO

        var textProducto1Prop = app.project.item(7).layer(4).property("Source Text");
        var textProducto1Document = textProducto1Prop.value;
        myStringProducto1 = producto1Nombre;
    
        //RESETEO DE TEXTO EN CAPA Y AJUSTE TAMAÑO DE FUENTE

        textProducto1Document.resetCharStyle();
        textProducto1Document.fontSize = 400;

        //COLOR DE FUENTE

        if(producto1TextoColor == "blanco"){
            textProducto1Document.fillColor = [1, 1, 1];
        }
        else if(producto1TextoColor == "rojo"){
            textProducto1Document.fillColor = [169/255, 0, 0];
        }
        else{
            textProducto1Document.fillColor = [0, 0, 0];
        }
    
        //TIPOGRAFÍA DE FUENTE, SEPARACIÓN CARACTERES Y LÍNEAS, NEGRITA Y CONTENIDO DE TEXTO

        textProducto1Document.font = 'Montserrat-Black';
        textProducto1Document.tracking = 0;
        textProducto1Document.leading = 380;
        textProducto1Document.setFauxBold = false;

        //JUSTIFICACIÓN DE PÁRRAFO EN FUNCIÓN DE LA POSICIÓN DE PRODUCTO SELECCIONADA POR CLIENTE PARA LA CREATIVIDAD

        if(producto1Posicion == "right"){
            textProducto1Document.justification = ParagraphJustification.RIGHT_JUSTIFY;
        }
        else{
            textProducto1Document.justification = ParagraphJustification.LEFT_JUSTIFY;
        }

        textProducto1Document.text = myStringProducto1;
        textProducto1Prop.setValue(textProducto1Document);

    //MODIFICACIÓN PRECIO PRODUCTO

        var textPrecioProducto1Prop = app.project.item(7).layer(1).property("Source Text");
        var textPrecioProducto1Document = textPrecioProducto1Prop.value;
        myStringPrecioProducto1 = producto1Precio;
    
        //RESETEO DE TEXTO EN CAPA Y AJUSTE TAMAÑO DE FUENTE

        textPrecioProducto1Document.resetCharStyle();
        textPrecioProducto1Document.fontSize = 55;

        //COLOR DE FUENTE

        if(producto1TextoColor == "blanco"){
            textPrecioProducto1Document.fillColor = [1, 1, 1];
        }
        else if(producto1TextoColor == "rojo"){
            textPrecioProducto1Document.fillColor = [169/255, 0, 0];
        }
        else{
            textPrecioProducto1Document.fillColor = [0, 0, 0];
        }
    
        //TIPOGRAFÍA DE FUENTE, SEPARACIÓN CARACTERES Y LÍNEAS, NEGRITA Y CONTENIDO DE TEXTO

        textPrecioProducto1Document.font = 'Montserrat-Black';
        textPrecioProducto1Document.tracking = 0;
        textPrecioProducto1Document.leading = 74;
        textPrecioProducto1Document.setFauxBold = false;
        textPrecioProducto1Document.text = myStringPrecioProducto1;
        textPrecioProducto1Prop.setValue(textPrecioProducto1Document);

    //MODIFICACIÓN CARACTERÍSTICAS PRODUCTO

        var textCaractProducto1Prop = app.project.item(7).layer(5).property("Source Text");
        var textCaractProducto1Document = textCaractProducto1Prop.value;
        myStringCaractProducto1 = producto1Caracteristicas;
    
        //RESETEO DE TEXTO EN CAPA Y AJUSTE TAMAÑO DE FUENTE

        textCaractProducto1Document.resetCharStyle();
        textCaractProducto1Document.fontSize = 80;

        //COLOR DE FUENTE

        if(producto1TextoColor == "blanco"){
            textCaractProducto1Document.fillColor = [1, 1, 1];
        }
        else if(producto1TextoColor == "rojo"){
            textCaractProducto1Document.fillColor = [169/255, 0, 0];
        }
        else{
            textCaractProducto1Document.fillColor = [0, 0, 0];
        }
    
        //TIPOGRAFÍA DE FUENTE, SEPARACIÓN CARACTERES Y LÍNEAS, NEGRITA Y CONTENIDO DE TEXTO

        textCaractProducto1Document.font = 'Montserrat-Black';
        textCaractProducto1Document.tracking = 0;
        textCaractProducto1Document.leading = 115;
        textCaractProducto1Document.setFauxBold = true;

        //JUSTIFICACIÓN DE PÁRRAFO EN FUNCIÓN DE LA POSICIÓN DE PRODUCTO SELECCIONADA POR CLIENTE PARA LA CREATIVIDAD

        if(producto1Posicion == "right"){
            textCaractProducto1Document.justification = ParagraphJustification.RIGHT_JUSTIFY;
        }
        else{
            textCaractProducto1Document.justification = ParagraphJustification.LEFT_JUSTIFY;
        }

        textCaractProducto1Document.text = myStringCaractProducto1;
        textCaractProducto1Prop.setValue(textCaractProducto1Document);

    //MODIFICACIÓN OFERTA PRODUCTO

        var textOfertaProducto1Prop = app.project.item(7).layer(3).property("Source Text");
        var textOfertaProducto1Document = textOfertaProducto1Prop.value;
        myStringOfertaProducto1 = producto1Oferta;
    
        //RESETEO DE TEXTO EN CAPA Y AJUSTE TAMAÑO DE FUENTE

        textOfertaProducto1Document.resetCharStyle();
        textOfertaProducto1Document.fontSize = 55;

        //COLOR DE FUENTE

        if(producto1TextoColor == "blanco"){
            textOfertaProducto1Document.fillColor = [1, 1, 1];
        }
        else if(producto1TextoColor == "rojo"){
            textOfertaProducto1Document.fillColor = [169/255, 0, 0];
        }
        else{
            textOfertaProducto1Document.fillColor = [0, 0, 0];
        }
    
        //TIPOGRAFÍA DE FUENTE, SEPARACIÓN CARACTERES Y LÍNEAS, NEGRITA Y CONTENIDO DE TEXTO

        textOfertaProducto1Document.font = 'Montserrat-Medium';
        textOfertaProducto1Document.tracking = 0;
        textOfertaProducto1Document.leading = 47;
        textOfertaProducto1Document.setFauxBold = true;
        textOfertaProducto1Document.text = myStringOfertaProducto1;
        textOfertaProducto1Prop.setValue(textOfertaProducto1Document);

    //FUNCIÓN REEMPLAZO DE PRODUCTO

    replaceFootage(42, producto1);

    /*MODIFICACIÓN DE POSICIÓN DE OBJETOS DE COMPOSICIÓN SEGÚN POSICIÓN DE PRODUCTO SELECCIONADA POR CLIENTE
    PARA LA CREATIVIDAD */

        //SELECCIÓN DE OBJETOS EN COMPOSICIÓN

        objetoLogo = app.project.item(7).layer(6);
        objetoBasePrecio = app.project.item(7).layer(2);
        objetoPrecio = app.project.item(7).layer(1);
        objetoBaseProducto = app.project.item(7).layer(9);
        objetoProducto = app.project.item(7).layer(7);
        objetoBaseOferta = app.project.item(7).layer(8);
        objetoOferta = app.project.item(7).layer(3);
        objetoNombreProducto = app.project.item(7).layer(4);
        objetoCaractProducto = app.project.item(7).layer(5);

        //MODIFICACIÓN POSICIÓN

        if(producto1Posicion == "right"){
            objetoLogo.transform.position.setValue([1656, 907]);
            objetoBasePrecio.transform.position.setValue([-10, -25]);
            objetoPrecio.transform.position.setValue([1043, 324, 0]);
            objetoBaseProducto.transform.position.setValue([1761, 391]);
            objetoProducto.transform.position.setValue([528, 835]);
            objetoBaseOferta.transform.position.setValue([870, 828, 0]);
            objetoOferta.transform.position.setValue([953, 807]);
            objetoNombreProducto.transform.position.setValue([1797, 376]);
            objetoCaractProducto.transform.position.setValue([1081, 617]);
        }
        else{
            objetoLogo.transform.position.setValue([270, 907]);
            objetoBasePrecio.transform.position.setValue([-11, -28]);
            objetoPrecio.transform.position.setValue([943, 324, 0]);
            objetoBaseProducto.transform.position.setValue([1761, 391]);
            objetoProducto.transform.position.setValue([1456, 835]);
            objetoBaseOferta.transform.position.setValue([870, 828, 0]);
            objetoOferta.transform.position.setValue([953, 807]);
            objetoNombreProducto.transform.position.setValue([119, 383]);
            objetoCaractProducto.transform.position.setValue([243, 617]);
        }

}

//--------------------------------------------------------------------------------------------------------------

//FUNCIÓN MODIFICACIÓN FORMULARIO - VIÑETA 4 - PRODUCTO 2

function propertiesForm4(data){

    producto2Posicion = data.posicion2;
    producto2 = data.producto2;
    producto2TextoColor = data.color_texto_producto2;
    producto2Nombre = data.nombre_producto2;
    producto2Precio = data.precio2;
    producto2Caracteristicas = data.caracteristicas2;
    producto2Oferta = data.oferta_producto2;

    //MODIFICACIÓN NOMBRE PRODUCTO

        var textProducto2Prop = app.project.item(9).layer(4).property("Source Text");
        var textProducto2Document = textProducto2Prop.value;
        myStringProducto2 = producto2Nombre;

        //RESETEO DE TEXTO EN CAPA Y AJUSTE TAMAÑO DE FUENTE

        textProducto2Document.resetCharStyle();
        textProducto2Document.fontSize = 400;

        //COLOR DE FUENTE

        if(producto2TextoColor == "blanco"){
            textProducto2Document.fillColor = [1, 1, 1];
        }
        else if(producto2TextoColor == "rojo"){
            textProducto2Document.fillColor = [169/255, 0, 0];
        }
        else{
            textProducto2Document.fillColor = [0, 0, 0];
        }

        //TIPOGRAFÍA DE FUENTE, SEPARACIÓN CARACTERES Y LÍNEAS, NEGRITA Y CONTENIDO DE TEXTO

        textProducto2Document.font = 'Montserrat-Black';
        textProducto2Document.tracking = 0;
        textProducto2Document.leading = 410;
        textProducto2Document.setFauxBold = false;

        //JUSTIFICACIÓN DE PÁRRAFO EN FUNCIÓN DE LA POSICIÓN DE PRODUCTO SELECCIONADA POR CLIENTE PARA LA CREATIVIDAD

        if(producto2Posicion == "right"){
            textProducto2Document.justification = ParagraphJustification.RIGHT_JUSTIFY;
        }
        else{
            textProducto2Document.justification = ParagraphJustification.LEFT_JUSTIFY;
        }

        textProducto2Document.text = myStringProducto2;
        textProducto2Prop.setValue(textProducto2Document);

    //MODIFICACIÓN PRECIO PRODUCTO

        var textPrecioProducto2Prop = app.project.item(9).layer(1).property("Source Text");
        var textPrecioProducto2Document = textPrecioProducto2Prop.value;
        myStringPrecioProducto2 = producto2Precio;

        //RESETEO DE TEXTO EN CAPA Y AJUSTE TAMAÑO DE FUENTE

        textPrecioProducto2Document.resetCharStyle();
        textPrecioProducto2Document.fontSize = 55;

        //COLOR DE FUENTE

        if(producto2TextoColor == "blanco"){
            textPrecioProducto2Document.fillColor = [1, 1, 1];
        }
        else if(producto2TextoColor == "rojo"){
            textPrecioProducto2Document.fillColor = [169/255, 0, 0];
        }
        else{
            textPrecioProducto2Document.fillColor = [0, 0, 0];
        }

        //TIPOGRAFÍA DE FUENTE, SEPARACIÓN CARACTERES Y LÍNEAS, NEGRITA Y CONTENIDO DE TEXTO

        textPrecioProducto2Document.font = 'Montserrat-Black';
        textPrecioProducto2Document.tracking = 0;
        textPrecioProducto2Document.leading = 74;
        textPrecioProducto2Document.setFauxBold = false;
        textPrecioProducto2Document.text = myStringPrecioProducto2;
        textPrecioProducto2Prop.setValue(textPrecioProducto2Document);

    //MODIFICACIÓN CARACTERÍSTICAS PRODUCTO

        var textCaractProducto2Prop = app.project.item(9).layer(5).property("Source Text");
        var textCaractProducto2Document = textCaractProducto2Prop.value;
        myStringCaractProducto2 = producto2Caracteristicas;

        //RESETEO DE TEXTO EN CAPA Y AJUSTE TAMAÑO DE FUENTE

        textCaractProducto2Document.resetCharStyle();
        textCaractProducto2Document.fontSize = 80;

        //COLOR DE FUENTE

        if(producto2TextoColor == "blanco"){
            textCaractProducto2Document.fillColor = [1, 1, 1];
        }
        else if(producto2TextoColor == "rojo"){
            textCaractProducto2Document.fillColor = [169/255, 0, 0];
        }
        else{
            textCaractProducto2Document.fillColor = [0, 0, 0];
        }

        //TIPOGRAFÍA DE FUENTE, SEPARACIÓN CARACTERES Y LÍNEAS, NEGRITA Y CONTENIDO DE TEXTO

        textCaractProducto2Document.font = 'Montserrat-Black';
        textCaractProducto2Document.tracking = 0;
        textCaractProducto2Document.leading = 115;
        textCaractProducto2Document.setFauxBold = true;

        //JUSTIFICACIÓN DE PÁRRAFO EN FUNCIÓN DE LA POSICIÓN DE PRODUCTO SELECCIONADA POR CLIENTE PARA LA CREATIVIDAD

        if(producto2Posicion == "right"){
            textCaractProducto2Document.justification = ParagraphJustification.RIGHT_JUSTIFY;
        }
        else{
            textCaractProducto2Document.justification = ParagraphJustification.LEFT_JUSTIFY;
        }

        textCaractProducto2Document.text = myStringCaractProducto2;
        textCaractProducto2Prop.setValue(textCaractProducto2Document);

    //MODIFICACIÓN OFERTA PRODUCTO

        var textOfertaProducto2Prop = app.project.item(9).layer(3).property("Source Text");
        var textOfertaProducto2Document = textOfertaProducto2Prop.value;
        myStringOfertaProducto2 = producto2Oferta;

        //RESETEO DE TEXTO EN CAPA Y AJUSTE TAMAÑO DE FUENTE

        textOfertaProducto2Document.resetCharStyle();
        textOfertaProducto2Document.fontSize = 55;

        //COLOR DE FUENTE

        if(producto1TextoColor == "blanco"){
            textOfertaProducto2Document.fillColor = [1, 1, 1];
        }
        else if(producto1TextoColor == "rojo"){
            textOfertaProducto2Document.fillColor = [169/255, 0, 0];
        }
        else{
            textOfertaProducto2Document.fillColor = [0, 0, 0];
        }

        //TIPOGRAFÍA DE FUENTE, SEPARACIÓN CARACTERES Y LÍNEAS, NEGRITA Y CONTENIDO DE TEXTO

        textOfertaProducto2Document.font = 'Montserrat-Medium';
        textOfertaProducto2Document.tracking = 0;
        textOfertaProducto2Document.leading = 47;
        textOfertaProducto2Document.setFauxBold = true;
        textOfertaProducto2Document.text = myStringOfertaProducto2;
        textOfertaProducto2Prop.setValue(textOfertaProducto2Document);

    //FUNCIÓN REEMPLAZO DE PRODUCTO

    replaceFootage(44, producto2);

    /*MODIFICACIÓN DE POSICIÓN DE OBJETOS DE COMPOSICIÓN SEGÚN POSICIÓN DE PRODUCTO SELECCIONADA POR CLIENTE
    PARA LA CREATIVIDAD */

        //SELECCIÓN DE OBJETOS EN COMPOSICIÓN

        objetoLogo = app.project.item(9).layer(6);
        objetoBasePrecio = app.project.item(9).layer(2);
        objetoPrecio = app.project.item(9).layer(1);
        objetoBaseProducto = app.project.item(9).layer(9);
        objetoProducto = app.project.item(9).layer(7);
        objetoBaseOferta = app.project.item(9).layer(8);
        objetoOferta = app.project.item(9).layer(3);
        objetoNombreProducto = app.project.item(9).layer(4);
        objetoCaractProducto = app.project.item(9).layer(5);

    //MODIFICACIÓN POSICIÓN

    if(producto2Posicion == "right"){
        objetoLogo.transform.position.setValue([1656, 907]);
        objetoBasePrecio.transform.position.setValue([-10, -25]);
        objetoPrecio.transform.position.setValue([983, 304, 0]);
        objetoBaseProducto.transform.position.setValue([1761, 391]);
        objetoProducto.transform.position.setValue([528, 835]);
        objetoBaseOferta.transform.position.setValue([870, 828, 0]);
        objetoOferta.transform.position.setValue([953, 807]);
        objetoNombreProducto.transform.position.setValue([1797, 376]);
        objetoCaractProducto.transform.position.setValue([959, 617]);
    }
    else{
        objetoLogo.transform.position.setValue([270, 907]);
        objetoBasePrecio.transform.position.setValue([-11, -28]);
        objetoPrecio.transform.position.setValue([943, 324, 0]);
        objetoBaseProducto.transform.position.setValue([1761, 391]);
        objetoProducto.transform.position.setValue([1456, 835]);
        objetoBaseOferta.transform.position.setValue([870, 828, 0]);
        objetoOferta.transform.position.setValue([953, 807]);
        objetoNombreProducto.transform.position.setValue([119, 383]);
        objetoCaractProducto.transform.position.setValue([131, 617]);
    }

}

//--------------------------------------------------------------------------------------------------------------

//FUNCTION MODIFICACIÓN FORMULARIO - VIÑETA 5 - OUTRO

function propertiesForm5(data){

    coloresLogo2 = data.logo2_colores;
    claim2Activar = data.activar_claim2;
    claimLogo2 = data.claim_logo2;

    activarWeb = data.activar_web;
    contenidoWeb = data.contenido_web;

    //SELECCIÓN DE OBJETOS EN COMPOSICIÓN

    var claim2 = app.project.item(28).layer(21);

    //CLAIM ACTIVO

        if(claim2Activar == "off"){
            claim2.enabled = false;
        }
        else{
            claim2.enabled = true;
        }

    //CONTENIDO FUENTE DE TEXTO CLAIM

        var textClaim2Prop = app.project.item(28).layer(21).property("Source Text");
        var textClaim2Document = textClaim2Prop.value;
        myStringClaim2 = claimLogo2;

        //RESETEO DE TEXTO EN CAPA Y AJUSTE TAMAÑO y COLOR DE FUENTE

        textClaim2Document.resetCharStyle();
        textClaim2Document.fontSize = 48;
        textClaim2Document.fillColor = [0, 0, 0];

        //TIPOGRAFÍA DE FUENTE, SEPARACIÓN CARACTERES Y LÍNEAS, NEGRITA Y CONTENIDO DE TEXTO

        textClaim2Document.font = 'Moderat-Black';
        textClaim2Document.tracking = -6;
        textClaim2Document.leading = 205,7;
        textClaim2Document.setFauxBold = false;
        textClaim2Document.text = myStringClaim2;
        textClaim2Prop.setValue(textClaim2Document);

    //SELECCIÓN DE OBJETOS EN COMPOSICIÓN

        var webMarca = app.project.item(28).layer(22);

    //WEB ACTIVA

        if(activarWeb == "off"){
            webMarca.enabled = false;
        }
        else{
            webMarca.enabled = true;
        }

    //CONTENIDO FUENTE DE TEXTO CLAIM

        var textWebProp = app.project.item(28).layer(22).property("Source Text");
        var textWebDocument = textWebProp.value;
        myStringWeb = contenidoWeb;

    //RESETEO DE TEXTO EN CAPA Y AJUSTE TAMAÑO y COLOR DE FUENTE

        textWebDocument.resetCharStyle();
        textWebDocument.fontSize = 48;
        textWebDocument.fillColor = [0, 0, 0];

    //TIPOGRAFÍA DE FUENTE, SEPARACIÓN CARACTERES Y LÍNEAS, NEGRITA Y CONTENIDO DE TEXTO

        textWebDocument.font = 'Moderat-Thin';
        textWebDocument.tracking = -6;
        textWebDocument.leading = 205,7;
        textWebDocument.setFauxBold = false;
        textWebDocument.text = myStringWeb;
        textWebProp.setValue(textWebDocument);

    //MODIFICACIÓN COLORES LOGOTIPO

        //SELECCIÓN DE LAYERS EN COMPOSICIÓN

        var opcion11 = app.project.item(28).layer(13);
        var opcion12 = app.project.item(28).layer(14);
        var opcion13 = app.project.item(28).layer(15);
        var opcion14 = app.project.item(28).layer(16);
        var opcion15 = app.project.item(28).layer(17);
        var opcion16 = app.project.item(28).layer(18);

        var opcion21 = app.project.item(28).layer(7);
        var opcion22 = app.project.item(28).layer(8);
        var opcion23 = app.project.item(28).layer(9);
        var opcion24 = app.project.item(28).layer(10);
        var opcion25 = app.project.item(28).layer(11);
        var opcion26 = app.project.item(28).layer(12);

        var opcion31 = app.project.item(28).layer(1);
        var opcion32 = app.project.item(28).layer(2);
        var opcion33 = app.project.item(28).layer(3);
        var opcion34 = app.project.item(28).layer(4);
        var opcion35 = app.project.item(28).layer(5);
        var opcion36 = app.project.item(28).layer(6);

        if(coloresLogo1 == "opcion2"){
            
            opcion11.enabled = false;
            opcion12.enabled = false;
            opcion13.enabled = false;
            opcion14.enabled = false;
            opcion15.enabled = false;
            opcion16.enabled = false;
            
            opcion21.enabled = true;
            opcion22.enabled = true;
            opcion23.enabled = true;
            opcion24.enabled = true;
            opcion25.enabled = true;
            opcion26.enabled = true;

            opcion31.enabled = false;
            opcion32.enabled = false;
            opcion33.enabled = false;
            opcion34.enabled = false;
            opcion35.enabled = false;
            opcion36.enabled = false;
        }
        else if(coloresLogo1 == "opcion3"){
            opcion11.enabled = false;
            opcion12.enabled = false;
            opcion13.enabled = false;
            opcion14.enabled = false;
            opcion15.enabled = false;
            opcion16.enabled = false;
            
            opcion21.enabled = false;
            opcion22.enabled = false;
            opcion23.enabled = false;
            opcion24.enabled = false;
            opcion25.enabled = false;
            opcion26.enabled = false;

            opcion31.enabled = true;
            opcion32.enabled = true;
            opcion33.enabled = true;
            opcion34.enabled = true;
            opcion35.enabled = true;
            opcion36.enabled = true;
            
        }
        else{
            opcion11.enabled = true;
            opcion12.enabled = true;
            opcion13.enabled = true;
            opcion14.enabled = true;
            opcion15.enabled = true;
            opcion16.enabled = true;
            
            opcion21.enabled = false;
            opcion22.enabled = false;
            opcion23.enabled = false;
            opcion24.enabled = false;
            opcion25.enabled = false;
            opcion26.enabled = false;

            opcion31.enabled = false;
            opcion32.enabled = false;
            opcion33.enabled = false;
            opcion34.enabled = false;
            opcion35.enabled = false;
            opcion36.enabled = false;
        } 

}

//--------------------------------------------------------------------------------------------------------------

function sceneCompositionMusic(data){

    //SELECCIÓN DE DATOS DEL ARCHIVO JSON EMITIDO POR SERVIDOR

    versionSpot = data.version_spot;
    musicaActiva = data.activar_musica;
    tipoMusica = data.musica;

    //SELECCIÓN DE OBJETOS - CAPAS EN COMPOSICIÓN

    christmasThemeV10 = app.project.item(3).layer(12);
    intensaThemeV10 = app.project.item(3).layer(13);
    leveThemeV10 = app.project.item(3).layer(14);

    christmasThemeV20 = app.project.item(3).layer(15);
    intensaThemeV20 = app.project.item(3).layer(16);
    leveThemeV20 = app.project.item(3).layer(17);

    //SELECCIÓN MUSICAL EN FUNCIÓN DE LA VERSIÓN DEL SPOT Y TIPO DE MÚSICA SELECCIONADOS POR CLIENTE

    if(versionSpot == "10"){
        if(tipoMusica == "navidad"){
            activa = christmasThemeV10
            activa.audioEnabled = true;
            intensaThemeV10.audioEnabled = false;
            leveThemeV10.audioEnabled = false;

            christmasThemeV20.audioEnabled = false;
            intensaThemeV20.audioEnabled = false;
            leveThemeV20.audioEnabled = false;
        }
        else if(tipoMusica == "intensa"){
            christmasThemeV10.audioEnabled = false;
            activa = intensaThemeV10;
            activa.audioEnabled = true;
            leveThemeV10.audioEnabled = false;

            christmasThemeV20.audioEnabled = false;
            intensaThemeV20.audioEnabled = false;
            leveThemeV20.audioEnabled = false;
        }
        else{
            christmasThemeV10.audioEnabled = false;
            intensaThemeV10.audioEnabled = false;
            activa = leveThemeV10;
            activa.audioEnabled = true;

            christmasThemeV20.audioEnabled = false;
            intensaThemeV20.audioEnabled = false;
            leveThemeV20.audioEnabled = false;
        }
    }
    else if(versionSpot == "20"){
        if(tipoMusica == "navidad"){
            christmasThemeV10.audioEnabled = false;
            intensaThemeV10.audioEnabled = false;
            leveThemeV10.audioEnabled = false;

            activa = christmasThemeV20;
            activa.audioEnabled = true;
            intensaThemeV20.audioEnabled = false;
            leveThemeV20.audioEnabled = false;
        }
        else if(tipoMusica == "intensa"){
            christmasThemeV10.audioEnabled = false;
            intensaThemeV10.audioEnabled = false;
            leveThemeV10.audioEnabled = false;

            christmasThemeV20.audioEnabled = false;
            activa = intensaThemeV20;
            activa.audioEnabled = true;
            leveThemeV20.audioEnabled = false;
        }
        else{
            christmasThemeV10.audioEnabled = false;
            intensaThemeV10.audioEnabled = false;
            leveThemeV10.audioEnabled = false;

            christmasThemeV20.audioEnabled = false;
            intensaThemeV20.audioEnabled = false;
            activa = leveThemeV20;
            activa.audioEnabled = true;
        }
    }

    if(musicaActiva == "off"){
        activa.audioEnabled = false;
    }
    else{
        activa.audioEnabled = true;
    }

}

//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------

//FUNCIONES RENDERIZADO-EXPORTADO DE PROYECTO

//--------------------------------------------------------------------------------------------------------------

function renderQueue(composition, renderQuality){
    app.project.renderQueue.items.add(composition);
    app.project.renderQueue.item(1).outputModule(1).applyTemplate(renderQuality);
    
    app.project.renderQueue.showWindow(true);
    app.project.renderQueue.render();
    app.project.renderQueue.showWindow(false);
    app.project.renderQueue.item(1).remove();
}

//--------------------------------------------------------------------------------------------------------------

function outputModuleTemplate(renderQuality){
    if(renderQuality == "high"){
        return "CLIENTE - High Broadcast(1080p - AppleProRes 422HQ)";
    }
    else if(renderQuality == "low"){
        return "CLIENTE - Low Broadcast Check (960p - AppleProRes 422Proxy)";
    }
    else if(renderQuality == "mid"){
        return "CLIENTE - Mid Broadcast(1080p - AppleProRes 422Proxy)";
    }
    else{
        alert("Template Name is not valide!!");
    }
}

//--------------------------------------------------------------------------------------------------------------

function renderizadoExportacionPieza(data){

    renderQuality = data.renderQuality;
    nombreRenderizadoPieza = data.nomenclaturaRenderPieza;

    //SELECCIÓN DE COMPOSICIÓN DE PROYECTO PARA RENDERIZAR

        renderComposition = app.project.item(1);

        renderComposition.name = "_" + Date() + "_" + nombreRenderizadoPieza;

        outputModuleTemp = outputModuleTemplate(renderQuality);       

        renderQueue(renderComposition, outputModuleTemp);

    //RENOMBRADO DE LA COMPOSICIÓN DE RENDERIZADO

        renderComposition.name = "_renderComposicion";

}

//-------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------
//LECTURA DE ARCHIVO JSON DEL SERVIDOR

var fileRef = File("C:\\Users\\gilva\\Projects\\unir_tfg_gilvalencia_01\\src\\json\\template_powermarkt.json");

var data = readJsonFile(fileRef);

//-------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------

//EJECUCIÓN DE FUNCIONES DEL SCRIPT

    //APERTURA DE PROYECTO

        openProject();

    //MODIFICAR ORDEN DE CAPAS VERSIÓN DE LA CREATIVIDAD (V10seg || V20seg)

        compositionVersionModify(data);

    //CONVERTIR TODAS LAS COMPOSICIONES A PARTIR DE LOS DATOS SELECCIONADOS POR CLIENTE EN EL FORMULARIO

        textIntro20Properties(data);
        textIntro10Properties(data);
        textLogo1Properties(data);
        propertiesForm3(data);
        propertiesForm4(data);
        propertiesForm5(data);
        sceneCompositionMusic(data);

    //RENDERIZADO DE LA PIEZA EN CARPETA DE EXPORTACIÓN SELECCIONADA

        renderizadoExportacionPieza(data);

    //EJECUCIÓN DE SALIDA DE LA APLICACIÓN*/

        appQuit();
        appQuit();

//-------------------------------------------------------------------------------------------------------------------