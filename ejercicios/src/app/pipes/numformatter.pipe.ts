import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numformatter'
})
export class NumformatterPipe implements PipeTransform {

  transform(numero: any, ...args: any[]): any {

  let resultado :string = undefined ; 
  let UNIDADES :string [] = ["","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"];
  let DECENAS :string []= ["","","","treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"];
  let DIECIS :string [] = ["diez","once","doce","trece","catorce","quince","dieciséis","diecisiete","dieciocho","diecinueve"];
  let VEINTIS :string [] = ["veinte","veintiuno","veintidós","veintitrés","veinticuatro","veinticinco","veintiséis","veintisiete","veintiocho","veintinueve"];
  let CENTENAS :string [] = ["","ciento ","doscientos ","trescientos ","cuatrocientos ","quinientos ","seiscientos ","setecientos ","ochocientos ","novecientos "];


  if (numero == 0) {
    return "cero";
  }

  if (numero == 100) {
    return "cien";
  }

  let valores = [];
  for (let i = 2; i >= 0; i--) {
    valores[i] = numero%10 | 0;
    numero = numero / 10 | 0;
  }

  if (valores[1] == 0) {
    if (valores[2] == 0) {
        resultado = CENTENAS[valores[0]];
    } 
    else {
        resultado = CENTENAS[valores[0]] + UNIDADES[valores[2]];
    }
}
else {
    if (valores[1] == 1) {
        resultado = CENTENAS[valores[0]] + DIECIS[valores[2]];
    }
    else if (valores[1] == 2) {
        resultado = CENTENAS[valores[0]] + VEINTIS[valores[2]];
    }
    else {
        if (valores[2] == 0) {
            resultado = CENTENAS[valores[0]] + DECENAS[valores[1]];
        }
        else {
            resultado = CENTENAS[valores[0]] + DECENAS[valores[1]] + " y " + UNIDADES[valores[2]];
        }
    }
}

    return resultado.trim();
  }

}
