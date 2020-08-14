import { Injectable } from '@angular/core';
@Injectable()
export class MaskService {
    public cpf(v) {
        v = this.soNumeros(v);
        const t = v.length;
        let txt: string = v.substr(0, 3);
        if (t > 3) {
            txt = txt + '.' + v.substr(3, 3);
        }
        if (t > 6) {
            txt = txt + '.' + v.substr(6, 3);
        }
        if (t > 9) {
            txt = txt + '-' + v.substr(9, 2);
        }
        return txt;
    }

    public data(v) {
        v = this.soNumeros(v);
        const t = v.length;
        let txt: string = v.substr(0, 2);
        if (t > 2) {
            txt = txt + '/' + v.substr(2, 2);
        }
        if (t > 4) {
            txt = txt + '/' + v.substr(4, 4);
        }
      
        return txt;
    }

    public hora(v) {
        v = this.soNumeros(v);
        const t = v.length;
        let txt: string = v.substr(0, 2);
        if (t > 2) {
            txt = txt + ':' + v.substr(2, 2);
        }
       
      
        return txt;
    }

    public cep(v) {
        v = this.soNumeros(v);
        const t = v.length;
        let txt: string = v.substr(0, 5);
        if (t > 5) {
            txt = txt + '-' + v.substr(5, 3);
        }
        return txt;
    }

    public money(v) {

        v = this.soNumeros(v);
        const t = v.length;
        let txt: string = v;

        if (t > 2) {
            txt = v.substr(0, (t - 2)) + ',' + v.substr(-2, 2);
        }

        return txt;
    }

    public soNumeros(numeros) { // variavel do parametro recebe o caractere digitado//
        return numeros.replace(/\D/g, '');
    }

}
