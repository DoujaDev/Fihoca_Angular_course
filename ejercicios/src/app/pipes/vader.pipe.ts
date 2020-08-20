import { Pipe, PipeTransform, Input } from '@angular/core';

@Pipe({
  name: 'vader'
})
export class VaderPipe implements PipeTransform {

  transform(texto: any, ...args: any[]): any {

      let numeroCaracteres = Number(args[0]); 
      let longitud = texto.length;

      let parteIzquierda:string = texto.substring(0,numeroCaracteres).toUpperCase;
      let parteCentral:string = texto.substring(numeroCaracteres,longitud - numeroCaracteres);
      let parteDerecha:string = texto.substring(longitud-numeroCaracteres);
    
    return parteIzquierda.toUpperCase + parteCentral + parteDerecha.toUpperCase;
  }

}
//value.charAt(Args).toUpperCase()+value.slice(1)
/*
transform(texto: any, ...args: any[]): any {

  let numeroCAracteres
  
  if(numeroCaracteres <= texto.length /2){
    return texto.toUppercase;
  }

  let secuencua;string[] = texto.split("");

  for(let i=0; i< numeroCaracteres; i++){
    secuencia[i]= secuencia[i].toUpperCase();
    secuencia[secuencia.lenght -i -1] = secuencia[secuencia.length -i -1].toUppercase();
    }
  return secuencia.join("");
}
*/ 