import { Validacion } from "./Validacion.js";
//Instaciar un objeto

const validacion = new Validacion();
const formulario = document.getElementById("form");
const btn = document.getElementById("btnSend");
//objeto de validacion
const formValid = {

    email: false,
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
        case "email":
            formValid.email = validacion.validMail(miValue);
            formValid.email ? validClass() : inValidClass();
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
            'Te estaremos contactando lo mas pronto que padamos!',
            'success'
        )
        let datos = new FormData(document.getElementById('form'));
        console.log(datos);
    }
    form.reset();

});
