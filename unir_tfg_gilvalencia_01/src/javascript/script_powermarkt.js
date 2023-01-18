/*
TRABAJO FINAL DE GRADO INGENIERÍA INFORMÁTICA - UNIVERSIDAD INTERNACIONAL DE LA RIOJA
"Data-Driven Video: Automatización y Control de Proyectos Audiovisuales en Marketing y Publicidad"
Alumno: José Antonio Gil Valencia
Directora: Belén Bermejo González
Curso: 2022-2023
*/

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';

//MANEJADOR DE SUBMIT BUTTON

function handleFormSubmit(event) {
  event.preventDefault();
    
  const data = new FormData(event.target);
    
  const formJSON = Object.fromEntries(data.entries());
  
  var datos = JSON.stringify(formJSON, null, 2);

  var getname = jQuery('#name').val();
  var getemail = jQuery('#mail').val();
  var getphone = jQuery('#subject').val();
  var getmessage = jQuery('#message').val();

  $.ajax({
    url:'enviar.php',
    data:{ name:getname, email:getemail, phone:getphone, message:getmessage, mydata:datos, cliente:'edp'},
    method: 'POST',
    success: window.location="sent.html"
  });

}

const form = document.querySelector('.contact-form');
form.addEventListener('submit', handleFormSubmit);

  