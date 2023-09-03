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

// Obtener referencia al botón de continuar
const contiBtn = document.getElementById("conti-btn");

// Obtener referencia al botón de cancelar
const cancelarBtn = document.getElementById("cancelar-btn");

// Obtener referencias a los campos de entrada del formulario de trans a ben
const formTransfBen=document.getElementById('form-transfBen');

//obtener referencia de los inputs campos de entrada de los datos

const nameInput = document.getElementById("name");
const ciInput = document.getElementById("ci");
const nroctaInput = document.getElementById("nrocta");
const montoInput = document.getElementById("monto");


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

/*evento al boton continuar*/

contiBtn.addEventListener("click", () => {
    if (nameInput.value === "" || ciInput.value === "" || nroctaInput.value === "" || montoInput.value === "") {
        alert("Por favor, complete todos los campos");
    } else {
        formTransfBen.reset();
        window.location.href = "tnaclaves.html";
        alert("Confirme los datos antes de continuar");
    }
});

/*evento al cancelar para que devuelva atras*/

cancelarBtn.addEventListener("click", () => {
	window.location.href = "transfers1.html";
    alert("¿Estas seguro de cancelar el proceso?");
});