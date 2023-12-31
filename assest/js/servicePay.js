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

// Obtener referencia al botón "Telefonía móvil y fija"
const telefoniaButton = document.getElementById("telefonia-button");

// Agregar evento de clic al botón "Telefonía móvil y fija"
telefoniaButton.addEventListener("click", () => {
    // Redirigir a la página telephoneServicePay.html
    window.location.href = "telephoneServicePay.html";
});

// Obtener referencia al botón "hidrolara"
const hidrolaraButton = document.getElementById("hidrolara-button");

// Agregar evento de clic al botón "hidrolara"
hidrolaraButton.addEventListener("click", () => {
    // Redirigir a la página hidrolaraServicePay.html
    window.location.href = "hidrolaraServicePay.html";
});

// Obtener referencia al botón "corpoelec"
const corpoelecButton = document.getElementById("corpoelec-button");

// Agregar evento de clic al botón "hidrolara"
corpoelecButton.addEventListener("click", () => {
    // Redirigir a la página corpoelecServicePay.html
    window.location.href = "corpoelecServicePay.html";
});

// Obtener referencia al botón "impuesto"
const taxButton = document.getElementById("tax-button");

// Agregar evento de clic al botón "hidrolara"
taxButton.addEventListener("click", () => {
    // Redirigir a la página taxServicePay.html
    window.location.href = "taxServicePay.html";
});