import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.css']
})
export class Ejercicio2Component  {

  tipoMoneda1:string;
  tipoMoneda2:string;
  valorMoneda1:number;
  valorMoneda2:number;

  monedas:string[] = ["EURO","DOLAR","RUBLO","FRANCO_SUIZO","BOLIVAR_VENEZOLANO"];

  factorConversion = {
    EURO:1,
    DOLAR:1.10,
    RUBLO:70.42,
    FRANCO_SUIZO:1.10,
    BOLIVAR_VENEZOLANO:38884.54
  }

  //calcular dependiendo la moneda
  //calcular dependiendo el importe
  constructor() { }

  convertir(changeValor:number):void{

    if (changeValor == 1){
      
      this.valorMoneda2=(this.valorMoneda1/this.factorConversion[this.tipoMoneda1])*this.factorConversion[this.tipoMoneda2];
      
    }

    else{
      this.valorMoneda1=(this.valorMoneda2/this.factorConversion[this.tipoMoneda2])*this.factorConversion[this.tipoMoneda1];
    }
  }

  cambioTipoMoneda(changeName:number):void{

    if(changeName == 1){
      this.valorMoneda1=(this.valorMoneda2/this.factorConversion[this.tipoMoneda2])*this.factorConversion[this.tipoMoneda1];
    }
    else{
      this.valorMoneda2=(this.valorMoneda1/this.factorConversion[this.tipoMoneda1])*this.factorConversion[this.tipoMoneda2];
    }
  }
  

}
