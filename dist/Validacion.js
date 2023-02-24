class Validacion {

    //contructor da valores iniciales a los atributos de un objet

    constructor() { };

    inputValid(input, regex) {
        return input.match(regex) ? true : false;
    }

    validNames(cad) {
        const nombresRX = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,15})$/g;
        const response = this.inputValid(cad, nombresRX);
        return response;
    }
    validMail(cad) {
        const mailRX = /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
        const response = this.inputValid(cad, mailRX)
        return response;

    }
    validPass(cad) { /*La contraseña debe tener al entre 5 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. NO puede tener otros símbolos.*/
        const passRX = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{5,16}$/g;
        const response = this.inputValid(cad, passRX)
        return response;

    }
    validTelf(cad) { /*La contraseña debe tener al entre 5 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. NO puede tener otros símbolos.*/
        const telfRX = /^\d{10}$$/g;
        const response = this.inputValid(cad, telfRX)
        return response;

    }
    validTextos(cad) { /*La contraseña debe tener al entre 5 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. NO puede tener otros símbolos.*/
        const telTex = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,100})$/g;
        const response = this.inputValid(cad, telTex)
        return response;

    }
    validarForm = (object) => {
        const valores = Object.values(object);
        let resp = valores.findIndex(e => e === false);
        return resp;
    }

}
export { Validacion };
