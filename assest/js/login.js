// Obtener referencia al botón de inicio de sesión
const loginBtn = document.getElementById("login-btn");

// Obtener referencias a los campos de entrada
const usernameInput = document.getElementById("username");
const cedulaInput = document.getElementById("cedula");
const passwordInput = document.getElementById("password");

// Agregar evento al botón de inicio de sesión para mostrar un mensaje si los campos están vacíos
loginBtn.addEventListener("click", () => {
    if (usernameInput.value === "" || cedulaInput.value === "" || passwordInput.value === "") {
        alert("Por favor, complete los campos para iniciar sesión.");
    } else if (usernameInput.value === "admin" && cedulaInput.value === "admin" && passwordInput.value === "admin") {
        alert("¡Inicio de sesión exitoso!");
    }else{
        alert("Este usuario no se encuentra registrado");
    }
});
