import { Validacion } from "./Validacion.js";
//Instaciar un objeto

const validacion = new Validacion();
const formulario = document.getElementById("formServicio");
const btn = document.getElementById("btnSend");
//objeto de validacion
const formValid = {
    nombres: false,
    apellidos: false,
    email: false,
    telf: false,
    textlargo: true
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
            formValid.email = validacion.validMail(miValue);
            formValid.email ? validClass() : inValidClass();
            console.log(Object.values(formValid));
            break;
        case "telf":
            formValid.telf = validacion.validTelf(miValue);
            formValid.telf ? validClass() : inValidClass();
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
        let datos = new FormData(document.getElementById('formServicio'));
        console.log(datos);
    }
    formServicio.reset();

});
