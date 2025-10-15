const validacion = document.getElementById("formulario");
const nombre = document.getElementById("nombre-completo");
const message = document.getElementsByClassName("message");
const email = document.getElementById("email");
const telefono = document.getElementById("numero-telefonico");






// funcion para validacion de furmularios
function validacionarFormulario(event) {

    event.preventDefault();
    const valorNombre = nombre.value;

    const nombreValidacionRegex =/^[A-ZÁÉÍÓÚÄËÏÖÜ][a-záéíóúäëïöü']+(?:[-\s][A-ZÁÉÍÓÚÄËÏÖÜ][a-záéíóúäëïöü']+)*$/;
    //este regex valida que el nombre no este vacio y que solo contenga letras, espacios, acentos, apostrofes y guiones
    // console.log(nombreValidacionRegex.test(valorNombre));


    //validaccion de nombre
    if(valorNombre === nombreValidacionRegex){
        console.log("El nombre no es valido");
        // message[0].innerText = "El nombre no es valido";        
        console.log(valorNombre);
        return false;

    }else if(valorNombre === " "){
        console.log("El nombre sigue en blanco");
        
        return false;

    }else{
        console.log("se valido el nombre y se envio el formulario")
        console.log(typeof(valorNombre));

        
    }

    // //validacion de email
    const valorEmail = email.value;
    const emailValidacionRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(valorEmail === emailValidacionRegex){
        console.log("El email no es valido \n por favor ingrese un email valido");
        return false;
    }else{
        console.log("se valido el email y se envio el formulario")
    }

    // //validacion de telefono
    const valorTelefono = telefono.value;
    const telefonoValidacionRegex = /^(\+\d{1,3}[\s-]?)?(\(\d{3}\)|\d{3})[\s-.]?\d{3}[\s-.]?\d{4}$/
    if(valorTelefono === telefonoValidacionRegex && valorTelefono.length < 10 ){
        console.log("El telefono no es valido \n por favor ingrese un telefono valido");
        return false;
    }else if(valorTelefono.length > 10){
        console.log("El telefono no es valido \n por favor ingrese un telefono valido");
        return false;
    }else if(valorTelefono.length < 10){
        console.log("El telefono no es valido \n por favor ingrese un telefono valido");
        return false;    
    }else if(valorTelefono.length === 0){
        console.log("El telefono no es valido \n por favor ingrese un telefono valido");
        return false;
    }else{
        console.log("se valido el telefono y se envio el formulario")
    }



    

}

// evento para validar formulario
validacion.addEventListener("submit", validacionarFormulario);