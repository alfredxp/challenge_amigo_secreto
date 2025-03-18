// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function sortearAmigo() {
    const cantidadAmigos = amigos.length;

    if (cantidadAmigos === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * cantidadAmigos);
    const amigoSorteado = amigos[indiceAleatorio];
    
    const elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = amigoSorteado;
}

function asignarAmigoALista() {
    const lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function agregarAmigo() {
    const inputNombre = document.querySelector("#amigo");
    const nombreAmigo = inputNombre.value.trim();

    if (!nombreAmigo) {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert("El amigo ya existe en la lista.");
        return;
    }

    amigos.push(nombreAmigo);
    inputNombre.value = "";
    asignarAmigoALista();
}
