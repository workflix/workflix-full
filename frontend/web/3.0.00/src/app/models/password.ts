export class Password {

    clave: string = '';
    confirmarClave: string = '';
    tokenClave: string = '';

    constructor(clave: string, confirmarClave: string, tokenClave: string) {
        this.clave = clave;
        this.confirmarClave = confirmarClave;
        this.tokenClave = tokenClave;
    }
}