const validacion = document.getElementById("formulario");
const nombre = document.getElementById("nombre-completo");
const message_nombre = document.querySelector(".message-nombre");
const mensage_email = document.querySelector(".message-email");
const mensage_telefono = document.querySelector(".message-telefono");
const mensage_confirmacion = document.querySelector(".message-resultado");
const email = document.getElementById("email");
const telefono = document.getElementById("numero-telefonico");



// seleccion de opciones
const selecion_marca_vehiculo = document.getElementById("marca-vehiculo-id");
const selecion_modelo_vehiculo = document.getElementById("modelo-vehiculo-id");
const localidad = document.getElementById("localidad-retiro-id");


// selector para el cambiar el estilo del contenedor desde js 
const contenedor = document.querySelector(".contenedor");


//funcion auxiliar para mostrar error recibe como parametro el texto y el color que debe de colorcarle 
function displayMessage(elemento ,text, color) {
    elemento.innerText = text;
    elemento.style.color = color;
}


// funcion para validacion de furmularios
function validacionarFormulario(event) {

    event.preventDefault();
    //limpia mensaje al inicio 
    displayMessage( message_nombre ,"", "initial");
    displayMessage(mensage_telefono,"", "initial");
    displayMessage(mensage_email,"", "initial");
    displayMessage(mensage_confirmacion,"", "initial"); 

    const valorNombre = nombre.value;
    const nombreValidacionRegex =/^[A-ZÁÉÍÓÚÄËÏÖÜ][a-záéíóúäëïöü']+(?:[-\s][A-ZÁÉÍÓÚÄËÏÖÜ][a-záéíóúäëïöü']+)*$/;
    //este regex valida que el nombre no este vacio y que solo contenga letras, espacios, acentos, apostrofes y guiones

    //validaccion del campo Nombre
    //validacion si el espacio esta vacia y con el .trim() evitamos que se introduzca espacios y pase la validacion
    if(valorNombre === null || valorNombre === undefined || valorNombre.trim() === ""){
        console.log("El nombre sigue en blanco");
        displayMessage(message_nombre ,"El nombre no puede estar en blanco", "red");        
        return false;

    // se utiliza el metodo get para validar y se niega 
    }else if(!nombreValidacionRegex.test(valorNombre)){ 
        console.log("El nombre no es valido");
        displayMessage(message_nombre ,"El texto no es valido", "red");
        console.log(valorNombre); 
        return false;

    // si todo esta ok 
    }else{
        displayMessage(message_nombre ,"Nombre es valido", "green")
        console.log("se valido el nombre ✔")
    }

    // //validacion del Campo email
    const valorEmail = email.value;
    const emailValidacionRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    
    if(!emailValidacionRegex.test(valorEmail)){
        console.log("El email no es valido \n por favor ingrese un email valido");
        displayMessage(mensage_email ,"el email no es valido", "red");
        return false;

    }else{
        console.log("se valido el email ✔")
        displayMessage(mensage_email,"Se valido el correo ", "green")
    }

    // //validacion del campo telefono, que no este vacio o que pase el regex
    const valorTelefono = telefono.value;
    const telefonoValidacionRegex = /^(\+\d{1,3}[\s-]?)?(\(\d{3}\)|\d{3})[\s-.]?\d{3}[\s-.]?\d{4}$/

    // validacion de telefono 
    if (!telefonoValidacionRegex.test(valorTelefono)) {
        displayMessage(mensage_telefono, "El teléfono no es válido. Ingrese un número de 10 dígitos.", "red");
        return false;

    }else{
        console.log("se valido el telefono y se envio el formulario ✔")
        displayMessage(mensage_telefono,"Teléfono válido", "green");
    }

    //VALIDACION PARA LA OPCION DE SELECION

    
    const valorMarca = selecion_marca_vehiculo.value;
    const valorModelo = selecion_modelo_vehiculo.value;
    const valorLocalidad = localidad.value;
    
    displayMessage(mensage_confirmacion ,"Validación exitosa, enviando datos...", "orange");

    //fetch se utiliza para realizar solicitudes de red (como una peticion http para odtener recursos) de un servidor como datos, archivos json o imagenes
    //esta es la forma como el frontend se comunica con el backend, fetch inicia el proceso para odtener un recurso debe de devolver una promesa lo que permite manejar una solicitud asincrona

    fetch("https://jsonplaceholder.typicode.com/posts", {
        //la url

    method: "POST", //define el metodo que se utilzara POST para enviar datos al servidor  - si no se especifica utilizara get para odtener o leer datos
    headers: {
        "Content-Type": "application/json"
    },
    //contiene los datos reales que seran enviados al servidor 
    body: JSON.stringify({
        //Datos que seran enviadas
        nombre: valorNombre,
        email: valorEmail,
        telefono: telefono
    })
    })
    //manejo del exito
    .then(respuesta => respuesta.json()) 
    .then(data => {
    console.log("Datos enviados con éxito:", data);
        displayMessage(mensage_confirmacion ,"Validación exitosa, Datos enviados", "green");

    })
    //manejo de error
    .catch(error => {
    console.error("Error al enviar los datos:", error);
    });

}



// evento para validar formulario
validacion.addEventListener("submit", validacionarFormulario);

    validacion.addEventListener("change",function(){
    

    
})
