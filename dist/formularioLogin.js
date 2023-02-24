import { Validacion } from "./Validacion.js";
//Instaciar un objeto

const validacion = new Validacion();
const formulario = document.getElementById("form");
const btn = document.getElementById("btnSend");
//objeto de validacion
const formValid = {
    mail: false,
    pass: false,
    
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

    }
    //envio del form
});

// recordatorio

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
    location.href = "../index.html";
});