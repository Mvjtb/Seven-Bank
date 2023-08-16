// Obtener referencia al botón de inicio de sesión
const loginBtn = document.getElementById("login-btn");

// Obtener referencias a los campos de entrada
const registerUserForm=document.getElementById('registerUserForm');
const inputs = document.querySelectorAll('#registerUserForm input');

const expresiones = {
	nameUser: /^[a-zA-Z0-9\_\-\*]{7,14}$/, // Letras, numeros, guion, guion_bajo y asterisco
	password: /^.{5,8}$/, // 5 a 8 digitos.
}

const campos = {
	nameUser: false,
	password: false,
}

/*funcion que se va a ejecutar mas abajo por cada input para validar*/
/*identificar y ubicar cada campo*/

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nameUser":
			validarCampo(expresiones.nameUser, e.target, 'nameUser');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarCPassword();
		break;
		case "cpassword":
			validarCPassword();
		break;
	}
}

/*se crea una funcion general para utilizarla varias veces con cada campo*/

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`group-${campo}`).classList.remove('group-form-incorrect');
		document.getElementById(`group-${campo}`).classList.add('group-form-correct');
		document.querySelector(`#group-${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#group-${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#group-${campo} .form-input-error`).classList.remove('form-input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`group-${campo}`).classList.add('group-form-incorrect');
		document.getElementById(`group-${campo}`).classList.remove('group-form-correct');
		document.querySelector(`#group-${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#group-${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#group-${campo} .form-input-error`).classList.add('form-input-error-activo');
		campos[campo] = false;
    }
}

/*se crea una funcion diferente para validar que ambas contraseñas coincidan*/ 

const validarCPassword = () => {
	const inputPassword = document.getElementById('password');
	const inputCPassword = document.getElementById('cpassword');

	if(inputPassword.value !== inputCPassword.value){
		document.getElementById(`group-cpassword`).classList.add('group-form-incorrect');
		document.getElementById(`group-cpassword`).classList.remove('group-form-correct');
		document.querySelector(`#group-cpassword i`).classList.add('fa-times-circle');
		document.querySelector(`#group-cpassword i`).classList.remove('fa-check-circle');
		document.querySelector(`#group-cpassword .form-input-error`).classList.add('form-input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`group-cpassword`).classList.remove('group-form-incorrect');
		document.getElementById(`group-cpassword`).classList.add('group-form-correct');
		document.querySelector(`#group-cpassword i`).classList.remove('fa-times-circle');
		document.querySelector(`#group-cpassword i`).classList.add('fa-check-circle');
		document.querySelector(`#group-cpassword .form-input-error`).classList.remove('form-input-error-activo');
		campos['password'] = true;
	}
}

/*va a validar en todas las cajitas (campos de input)*/

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario); /*al presionar y levantar una tecla*/
	input.addEventListener('blur', validarFormulario); /*al dar un click fuera del campo */
});

/*aqui va a validar al presionar el boton crear cuenta*/

registerUserForm.addEventListener('submit', (e) => {
    e.preventDefault();

	if(campos.nameUser && campos.password){
		registerUserForm.reset();

		document.getElementById('form-message-exito').classList.add('form-message-exito-activo');
		setTimeout(() => {
			document.getElementById('form-message-exito').classList.remove('form-message-exito-activo');
		}, 5000);

		document.querySelectorAll('.group-form-correct').forEach((icono) => {
			icono.classList.remove('group-form-correct');
		});
	} else {
		document.getElementById('form-message').classList.add('form-message-activo');
	}
});
