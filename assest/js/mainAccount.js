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
const logoutButton = document.getElementById("logout-btn");

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

