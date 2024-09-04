
// Lista de juegos (puedes hacer que esta lista se gestione dinámicamente)
let juegos = [
    'The Legend of Zelda',
    'Super Mario Bros',
    'Minecraft'
];

function verJuegos() {
    const output = document.getElementById('output');
    if (juegos.length === 0) {
        output.innerHTML = '<p>No hay juegos disponibles.</p>';
    } else {
        let html = '<h2>Listado de juegos disponibles:</h2><ul>';
        juegos.forEach(juego => {
            html += `<li>${juego}</li>`;
        });
        html += '</ul>';
        output.innerHTML = html;
    }
}

function añadirJuego() {
    const nuevoJuego = prompt('Ingrese el nombre del nuevo juego:');
    if (nuevoJuego) {
        juegos.push(nuevoJuego);
        verJuegos(); // Mostrar la lista actualizada de juegos
    }
}

function eliminarJuego() {
    const juegoAEliminar = prompt('Ingrese el nombre del juego a eliminar:');
    if (juegoAEliminar) {
        const index = juegos.indexOf(juegoAEliminar);
        if (index !== -1) {
            juegos.splice(index, 1);
            verJuegos(); // Mostrar la lista actualizada de juegos
        } else {
            alert('El juego no se encontró en la lista.');
        }
    }
}

function buscarJuego() {
    const juegoABuscar = prompt('Ingrese el nombre del juego a buscar:');
    if (juegoABuscar) {
        const encontrado = juegos.includes(juegoABuscar);
        const output = document.getElementById('output');
        if (encontrado) {
            output.innerHTML = `<p>El juego '${juegoABuscar}' se encuentra disponible.</p>`;
        } else {
            output.innerHTML = `<p>El juego '${juegoABuscar}' no se encuentra en la lista.</p>`;
        }
    }
}

function salir() {
    const output = document.getElementById('output');
    output.innerHTML = '<p>¡Hasta luego!</p>';
}
