// Array para almacenar los nombres
let amigos = []


//Funcion para limpiar el campo de entrada
function limpiarCampo() {
    document.querySelector('#amigo').value = '';
}

//Funcion para agregar amigos a la lista
function agregarAmigo(){
    let nombreIngresado = document.getElementById('amigo').value;

    //validacion si el campo esta vacio
    if(nombreIngresado === ""){
        alert("Por favor, inserte un nombre.");
        return
    }

    //Validacion si el nombre se repite sino se agrega al array
    if(amigos.includes(nombreIngresado)){
        alert(`El nombre ${nombreIngresado} ya fue ingresado, Ingrese otro`);
        limpiarCampo();
        return
    }else{
        amigos.push(nombreIngresado);
    }
    limpiarCampo();
}
