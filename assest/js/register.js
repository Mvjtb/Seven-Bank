// Obtener referencia al botón de registrarme
const registerBtn = document.getElementById("register-btn");

// Obtener referencia al botón de cancelar
const cancelBtn = document.getElementById("cancel-btn");

// Obtener referencias a los campos de entrada
const nameInput = document.getElementById("name");
const apellInput = document.getElementById("apellidos");
const cedulaInput = document.getElementById("cedula");
const numberInput = document.getElementById("number");
const countryInput = document.getElementById("country");

// Agregar evento al botón de registro para mostrar un mensaje si los campos están vacíos
registerBtn.addEventListener("click", () => {
    if (nameInput.value === "" || apellidosInput.value === "" || cedulaInput.value === "" || numberInput.value === "" || countryInput.value === "") {
        alert("Rellene todos los campos para registrarse.");
    }
});