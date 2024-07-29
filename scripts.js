document.addEventListener('DOMContentLoaded', function () {
    function mostrarSeccion(event, idSeccion) {
        event.preventDefault();
        document.querySelectorAll('.seccion').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(idSeccion).classList.add('active');
    }

    window.mostrarSeccion = mostrarSeccion;

    // 1
    function filtrarMayoresDeEdad(personas) {
        return personas.filter(persona => persona.edad >= 18);
    }

    function ejecutarEjercicio1() {
        const personasInput = document.getElementById('personasInput').value;
        const personas = JSON.parse(personasInput);
        const resultado = filtrarMayoresDeEdad(personas);
        document.getElementById('resultado1').textContent = JSON.stringify(resultado, null, 2);
    }
    window.ejecutarEjercicio1 = ejecutarEjercicio1;

    // 2
    function transformarYFiltrar(numeros) {
        return numeros.map(num => num * num).filter(cuadrado => cuadrado > 20);
    }

    function ejecutarEjercicio2() {
        const numerosInput = document.getElementById('numerosInput').value;
        const numeros = JSON.parse(numerosInput);
        const resultado = transformarYFiltrar(numeros);
        document.getElementById('resultado2').textContent = JSON.stringify(resultado, null, 2);
    }
    window.ejecutarEjercicio2 = ejecutarEjercicio2;

    // 3
    async function obtenerUsuarios() {
        try {
            const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
            const datos = await respuesta.json();
            console.log(datos);
            document.getElementById('resultado3').textContent = JSON.stringify(datos, null, 2);
        } catch (error) {
            console.error('Error al obtener los usuarios:', error);
            document.getElementById('resultado3').textContent = 'Error al obtener los usuarios: ' + error;
        }
    }

    function ejecutarEjercicio3() {
        obtenerUsuarios();
    }
    window.ejecutarEjercicio3 = ejecutarEjercicio3;

    // 4
    function agregarItem() {
        const lista = document.getElementById('lista');
        const nuevoItem = document.createElement('li');
        nuevoItem.textContent = 'Nuevo ítem';
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = () => lista.removeChild(nuevoItem);
        nuevoItem.appendChild(botonEliminar);
        lista.appendChild(nuevoItem);
    }
    window.agregarItem = agregarItem;

    // 5
    function ordenarPorPropiedad(arr, propiedad) {
        return arr.slice().sort((a, b) => (a[propiedad] > b[propiedad]) ? 1 : -1);
    }

    function ejecutarEjercicio5() {
        const objetosInput = document.getElementById('objetosInput').value;
        const objetos = JSON.parse(objetosInput);
        const propiedad = document.getElementById('propiedadInput').value;
        const resultado = ordenarPorPropiedad(objetos, propiedad);
        document.getElementById('resultado5').textContent = JSON.stringify(resultado, null, 2);
    }
    window.ejecutarEjercicio5 = ejecutarEjercicio5;
});
