// Array para almacenar los nombres
let amigos = []


//Funcion para limpiar el campo de entrada
function limpiarCampo() {
    document.querySelector('#amigo').value = '';
}

//Funcion para agregar amigos a la lista
function agregarAmigo(){
    let nombreIngresado = document.getElementById('amigo').value.trim();
    nombreIngresado = nombreIngresado.toUpperCase()
    
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
    actualizarLista();
    
    limpiarCampo();

}

//función para actualizar la lista de amigos
function actualizarLista(){
    let lista = document.getElementById('listaAmigos');
    
    //Limpiar la lista existente
    lista.innerHTML = "";
    
    //Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
        let nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigos[i];
        lista.appendChild(nuevoAmigo);
      }
}
//Llamar a la función cuando se cargue la página
window.onload = function() {
  actualizarLista();
}