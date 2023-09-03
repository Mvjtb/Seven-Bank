// Función para mostrar un mensaje y luego ocultarlo después de un tiempo
function showMessage(message) {
    const messageBox = document.getElementById("message-box");
    messageBox.textContent = message;
    messageBox.style.display = "block";

    setTimeout(() => {
        messageBox.style.display = "none";
    }, 3000); // Ocultar el mensaje después de 3 segundos
}

// Obtener referencia al botón "Cerrar sesión"
const logoutButton = document.getElementById("logout-btn-sup");

// Agregar evento de clic al botón "Cerrar sesión"
logoutButton.addEventListener("click", () => {
    const confirmation = confirm("¿Estás seguro de cerrar sesión?");
    if (confirmation) {
        setTimeout(() => {
            window.location.href = "index.html";             
        }, 1000); 
    }
});

// Obtener referencias a los botones y opciones
const consolidatedButton = document.querySelector(".horizontal-options button");
const consolidatedOptions = document.getElementById("consolidated-options");

// Agregar evento de clic al botón "Posición Consolidada"
consolidatedButton.addEventListener("click", () => {
    consolidatedOptions.classList.toggle("show-options");
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtén una referencia al botón de "Menú Principal"
    var menuPrincipalBtn = document.getElementById("menu-p-btn");

    // Agrega un evento de clic al botón
    menuPrincipalBtn.addEventListener("click", function() {
        // Redirige a mainAccount.html
        window.location.href = "mainAccount.html";
    });
});

//referencia al formulario
const formclaves = document.getElementById("formclaves");

//obtener referencia al boton confirmar 
const confBtn = document.getElementById("conf-btn");

//obtener referencia de la cajita del input
const claveInput = document.getElementById("clave");

confBtn.addEventListener("click", () => {
    //aqui debe ir un if para validar que la clave especial se encuentre en la base de datos
	if (claveInput.value === "") {
        document.getElementById('formclave-message').classList.add('formclave-message-activo');
    } else {
        formclaves.reset();
        window.location.href = "transfsuccess.html";
        alert("Aceptar");
    }
});