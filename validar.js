function validar(){
   var nombre, apellido, email, telefono, mensaje, expresion;
   nombre=document.getElementById("nombre").value; 
   apellido=document.getElementById("apellido").value; 
   email=document.getElementById("email").value; 
   telefono=document.getElementById("telefono").value; 
   mensaje=document.getElementById("mensaje").value; 

   expresion = /\w+@\w+\.+[a-z]/; /*Expresión regular para validar formatos de email:ejemplo texto123@hotmail.com*/

   if(nombre === "" || apellido === ""||email === ""){
    alert("El nombre, el apellido y el mail son obligatorios");
    return false;
   }
   else if(mensaje === ""){
    alert("Por favor escriba la consulta");
    return false;
   }
   else if(nombre.length>30){
     alert("El nombre no puede ser mayor a 30 caracteres");
     return false;
   }
   else if(apellido.length>80){
    alert("El apellido no puede ser mayor a 80 caracteres");
    return false;
  }
  else if(email.length>100){
    alert("El email no puede ser mayor a 100 caracteres");
    return false;
  }
  else if(!expresion.test(email)){
    alert("El email no es válido");
    return false;
  }
  else if(mensaje.length>200){
    alert("La consulta no puede superar los 200 caracteres");
    return false;
  }
  else if(isNaN(telefono)){
    alert("El teléfono ingresado no es valido, solo debe contener números");
    return false;
  }
}