// Función para mostrar un mensaje y luego ocultarlo después de un tiempo
function showMessage(message) {
    const messageBox = document.getElementById("message-box");
    messageBox.textContent = message;
    messageBox.style.display = "block";

    setTimeout(() => {
        messageBox.style.display = "none";
    }, 3000); // Ocultar el mensaje después de 3 segundos
}

document.addEventListener("DOMContentLoaded", function() {
    // Obtiene una referencia al botón de "crear clave especial"
    var ckeyBtn = document.getElementById("ckey-btn");

    // Agrega un evento de clic al botón
    ckeyBtn.addEventListener("click", function() {
        // Redirige al .html de crear clave especial
        window.location.href = "registerkey1.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtiene una referencia al botón de "iniciar sesion"
    var logiinBtn = document.getElementById("logiin-btn");

    // Agrega un evento de clic al botón
    logiinBtn.addEventListener("click", function() {
        // Redirige al .html de crear clave especial
        window.location.href = "login.html";
    });
});