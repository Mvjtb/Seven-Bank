// Obtener referencia al botón de cancelar
const canceBtn = document.getElementById("cance-btn");

// Obtener referencias a los campos de entrada
const registerKeyForm=document.getElementById('registerKeyForm');
const inputs = document.querySelectorAll('#registerKeyForm input');

const expresiones = {
	key: /^[a-zA-Z0-9\_\-\*]{8,14}$/, // Letras, numeros, guion, guion_bajo y asterisco
}

const campos = {
	key: false,
}

/*funcion que se va a ejecutar mas abajo por cada input para validar*/
/*identificar y ubicar cada campo*/

const validarFormulariok = (e) => {
	switch (e.target.name) {
		case "key":
			validarCampo(expresiones.key, e.target, 'key');
		break;
	}
}

/*se crea una funcion general para utilizarla varias veces con cada campo*/

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`group-${campo}`).classList.remove('group-formk-incorrect');
		document.getElementById(`group-${campo}`).classList.add('group-formk-correct');
		document.querySelector(`#group-${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#group-${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#group-${campo} .formk-input-error`).classList.remove('formk-input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`group-${campo}`).classList.add('group-formk-incorrect');
		document.getElementById(`group-${campo}`).classList.remove('group-formk-correct');
		document.querySelector(`#group-${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#group-${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#group-${campo} .formk-input-error`).classList.add('formk-input-error-activo');
		campos[campo] = false;
    }
}

/*va a validar en todas las cajitas (campos de input)*/

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulariok); /*al presionar y levantar una tecla*/
	input.addEventListener('blur', validarFormulariok); /*al dar un click fuera del campo */
});

/*aqui va a validar al presionar el boton save*/

registerKeyForm.addEventListener('submit', (e) => {
    e.preventDefault();

	if(campos.key){
		registerKeyForm.reset();
		window.location.href = "login.html";
        alert("¡Ya tienes tu clave especial para realizar transacciones!");
	} else {
		document.getElementById('formk-message').classList.add('formk-message-activo');
	}
});

/*validacion del boton cancelar*/

canceBtn.addEventListener('click', (e) => {
    e.preventDefault();

	if(campos.key){
		registerKeyForm.reset();
		window.location.href = "registerkey.html";
		alert("¿Estas seguro de cancelar el proceso?");
	} else {
		document.getElementById('formk-message').classList.add('formk-message-activo');
	}
});
