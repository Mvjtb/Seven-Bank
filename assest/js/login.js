// Obtener referencia al botón de inicio de sesión
const loginBtn = document.getElementById("login-btn");

const loginForm=document.getElementById('login-form');

// Obtener referencias a los campos de entrada
const nameUserInput = document.getElementById("nameUser");
const identInput = document.getElementById("ident");
const passwordInput = document.getElementById("password");

// Agregar evento al botón de inicio de sesión para mostrar un mensaje si los campos están vacíos
loginBtn.addEventListener("click", () => {
    if (nameUserInput.value === "" || identInput.value === "" || passwordInput.value === "") {
        alert("Por favor, complete los campos para iniciar sesión.");
    } else if (nameUserInput.value === "admin" && identInput.value === "admin" && passwordInput.value === "admin") {
        loginForm.reset();
        window.location.href = "mainAccount.html";
        alert("¡Inicio de sesión exitoso!");
    }else{
        alert("Este usuario no se encuentra registrado");
        
    }
});

