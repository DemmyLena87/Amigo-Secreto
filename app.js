// El principal objetivo de este desafío es fortalecer tus habilidades 
// en lógica de programación. Aquí deberás desarrollar la lógica 
// para resolver el problema.
let amigo = [];

function agregarAmigo(){
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value;

    if(!nombreAmigo){
        alert('Tienes que ingresar el nombre de tus amigos');
        return;
    }
amigo.push(nombreAmigo);
console.log(amigo);
inputAmigo.value = '';
//Para limpiar el campo de texto después de agregar un amigo
inputAmigo.focus();
//Para que el cursor se mantenga en el campo de texto
mostrarAmigos();
//Para que se muestren los amigos en el HTML   
}

//esta función es para hacer el listado en el HTML
function mostrarAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
        //Para limpiar la lista de amigos antes de mostrar los amigos
    //i es un índice que se utiliza para recorrer el arreglo y siempre inicia en 0
    //i < amigo.length es la condición que se debe cumplir para que el ciclo se ejecute
    for(let i = 0; i < amigo.length; i++){
       let item = document.createElement('li');
       item.textContent = amigo[i];
       //Para que se agregue el nombre del amigo en la lista en el HTML    
       listaAmigos.appendChild(item);   
       }
}

function sortearAmigo(){
    if(amigo.length === 0){ 
        alert('No ingresaste amigos para sortear');
        return;
    }
    let amigoSorteado = amigo [Math.floor(Math.random ()* amigo.length)];
    let resultado = document.getElementById('resultado');   
    resultado.innerHTML = `Tu amigo sorteado es: ${amigoSorteado}`;
    //Para que se muestre el amigo sorteado en el HTML

    let limpiarLista = document.getElementById('listaAmigos');
    limpiarLista.innerHTML = '';
    //Para limpiar la lista de amigos después de sortear
    amigo = [];
    //Para limpiar el arreglo de amigos después de sortear
    console.log(amigo);
    //Para verificar que el arreglo de amigos está vacío

}

function resetearLista (){
    let limpiarLista = document.getElementById('listaAmigos');
    limpiarLista.innerHTML = '';
    //Para limpiar la lista de amigos después de sortear
    amigo = [];
    //Para limpiar el arreglo de amigos después de sortear
    console.log(amigo);
    //Para verificar que el arreglo de amigos está vacío
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    //Para limpiar el resultado
}