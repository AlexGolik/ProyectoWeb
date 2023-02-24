import { Validacion } from "./Validacion.js";
//Instaciar un objeto

const validacion = new Validacion();
const formulario = document.getElementById("form");
const btn = document.getElementById("btnSend");
//objeto de validacion
const formValid = {
    nombres: false,
    apellidos: false,
    mail: false,
    pass: false,
    passTwo: true,
    politica: false
}

formulario.addEventListener("change", (e) => {
    const inputId = e.target.id;
    const miValue = e.target.value;
    const miClass = e.target.classList;
    const validClass = () => {
        miClass.add("is-valid");
        miClass.remove("is-invalid");
    };
    const inValidClass = () => {
        miClass.add("is-invalid");
        miClass.remove("is-valid");
    };

    switch (inputId) {
        case "names":
            formValid.nombres = validacion.validNames(miValue);
            formValid.nombres ? validClass() : inValidClass();
            console.log(Object.values(formValid));
            break;
        case "lastname":
            formValid.apellidos = validacion.validNames(miValue);
            formValid.apellidos ? validClass() : inValidClass();
            console.log(Object.values(formValid));
            break;
        case "email":
            formValid.mail = validacion.validMail(miValue);
            formValid.mail ? validClass() : inValidClass();
            console.log(Object.values(formValid));
            break;
        case "password":
            formValid.pass = validacion.validPass(miValue);
            formValid.pass ? validClass() : inValidClass();
            console.log(Object.values(formValid));
            break;
        case "checkPolitica":
            if (e.target.checked) formValid.politica = true;
            else formValid.politica = false;
            console.log(Object.values(formValid));
            break;

    }
    //envio del form
});

// recordatorio

Swal.fire({
    title: '¡Bienvenido!',
    text: "Recuerda que la contraseña debe tener al entre 5 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula",
    icon: 'info'

})


btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (validacion.validarForm(formValid) === -1) {
        Swal.fire(
            'Datos Enviados!',
            ':)',
            'success'
        )
        let datos = new FormData(document.getElementById('form'));
        console.log(datos);

    }
    form.reset();
});