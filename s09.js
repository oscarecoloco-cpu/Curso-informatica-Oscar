const botonTema = document.getElementById("btn-tema");
const cuerpoPagina = document.body;

botonTema.addEventlistener("click", function(){
    cuerpoPagina.classList.toggle("modo-oscuro");

    if(cuerpoPagina.classList.contains("modo-oscuro")){
        botonTema.textContent = "Cambiar a Modo Claro";
    } else {
        botonTema.textContent = "Cambiar a Modo Oscuro";
    }
});

const ListaProyectos = [
    {
        titulo: "Pensamiento Matematico Interac",
        descripcion: "Aplicacion web para mejorar los habitos de estudio mediante gamificacion y ejercicios guiados Desarollado com HTML, CSS y JS modular",
        enlace: "#"
    },
    {
        titulo: "Plano Fraccionamiento Nazas",
        descripcion: "Diseño tecnico en AutoCAD exportado y visualizado a traves de una interfaz web responsiva, cumpliendo cumpliendo co  las normativas electricas.",
        enlace: "#"
    },
    {
        titulo: "Calculo Luminico DIALux",
        descripcion: "Memoria descriptiva y reporte de calculos de iluminacion integrados en una galeria dinamica para proyectos arquitectonicos.",
        enlace: "#"
    }
];

const contenedor = 


    document.getElementById("contenedor-proyectos");

    ListaProyectos.forEach(function(proyecto, indice){
        const tarjetaHTML = '
        <div" class="terjeta-proyecto">
             <h3>${proyecto.titulo}</h3>
             <p>${proyecto.descripcion.substring(0, 50)}...</p>
             <button class="btn-abrir-modal" data-indice="${indice}">Ver detalles</button>
        </div>
        ';

        contenedor.innerHTML += tarjetaHTML;
    });

    const modal = document.getElementById("modal-proyecto");
    const btnCerrarModal = document.getElementById("btn-cerrar-modal");
    const modalTitulo = document.getElementById("modal-titulo");
    modalDesc = document.getElementById("modal-desc");
    const botonesAbrirModal = document.querySelectorAll(".btn-abrir-modal");

    botonesAbrirModal.forEach(function(boton) {
        boton.addEventListener("click", function() {
            const indiceExtraido = boton.getAttribute("data-indice");
            const proyectoSeleccionado =  listaProyectos[indiceExtraido];

            modalTitulo.textContent = proyectoSeleccionado.titulo;
            modalDEsc.textContent = proyectoSeleccionado.descripcion;

            modal.style.display = "flex"
        });
    });

    btnCerrarModal.addEventListener("click", function (){
        modal.style.display = "none"
    });

    window.addEventListener("click", function (evento){
        if (evento.target === modal) {
            modal.style.display = "none";
        }
    });

    const formulario = document.getElementById("formulario-contacto");

    formulario.addEventListener("sumit", function(evento){
        evento.preventDefault();

        const inputNombre = document.getElementById("nombre").value.trim();
        const inputCorreo = document.getElementById("correo").value.trim();
        const inputMensaje = document.getElementById("mensaje").value.trim();

        if (inputNombre === "" || inputCorreo ===""|| inputMensaje === ""){
            alert("¡Error! Por favor, llena todos los campos antes de enviar.");
        } else{
            alert("¡Exito! Tu mensaje ha sido enviado correctamente");
            formulario.reset();
        }
    });

    const btnMenu = document.getElementById("btn-menu");
    const menuNavegacion = document.getElementById("menu-navegacion");

    btnMenu.addEventListener("click", function(){
        menuNavegacion.classList.toggle("menu-activo");
    });
    

