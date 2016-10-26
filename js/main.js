
function validateForm(){

	var password = document.getElementById("input-password");
	var nombre = document.getElementById("name");
	var apellido = document.getElementById("lastname");
	var email = document.getElementById("input-email").value;
	var indice = document.getElementById("selector").selectedIndex;
	// validar datos

// nombre
	if( nombre.value == null || nombre.value.length == 0 || /^\s+$/.test(nombre.value) ) {
		alert("No debe dejar el campo Nombre en blanco");
		return false;
	}
 	else if(/^^[a-zA-Z]*$/.test(nombre.value) == false){
 		alert ("Nombre no valido, ingresar solo letras");
 		return true;
 	}    
 	else if(nombre.value.charAt(0).toUpperCase()!== nombre.value.charAt(0)){
 		alert ("Nombre no valido, la primera letra debe ser en mayúscula");
 		return false;
 	}

// apellido
	if( apellido.value == null || apellido.value.length == 0 || /^\s+$/.test(apellido.value) ) {
		alert("No debe dejar el campo Apellido en blanco");
		return false;
	}
	else if(/^^[a-zA-Z]*$/.test(apellido.value) == false){
 		alert ("Apellido no valido, ingresar solo letras");
 		return true;
 	}
    else if(apellido.value.charAt(0).toUpperCase()!== apellido.value.charAt(0)){
 		alert ("Apellido no valido, la primera letra debe ser en mayúscula");
 		return false;
 	}
    
// email
	if( email === null || email.length === 0 || /^\s+$/.test(email) ) {
		alert("No debe dejar el campo Mail en blanco");
		return false;
	}
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if( !re.test(email) ) {
		alert("Tu correo electrónico no es válido");
		return false;
	}

	/* cantiadad numeros contraseña */
	function limitada(){
		if (password.value.length < 6){
			alert("tu contraseña no es valida");
			return false;
		} else if (password.value=="password"){
			alert("tu contraseña no es valida");
			return false;	
		} else if (password.value=="123456"){
			alert("tu contraseña no es valida");
			return false;
		} else if (password.value=="098754"){
			alert("tu contraseña no es valida");
			return false;
		}else{
			return true;
		}
	}
	limitada();

/* validar una opcion de la lista */

function seleccion(){
	if (indice == null || indice == 0){
	alert("No haz seleccionado una opción, elige una");
		return false;
	}
}
seleccion();
}
