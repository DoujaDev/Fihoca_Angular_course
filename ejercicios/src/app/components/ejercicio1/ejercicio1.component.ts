import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component  {

    celsius:number;
    farenheit:number;
    kelvin:number;

    convertcelsius(): void {
      console.log("HOLI");
      this.farenheit = this.celsius+32;
      this.kelvin = this.celsius+273.15;
    
    }

    convertfarenheit(): void {
      console.log("HOLI");
      this.celsius = this.farenheit-32;
      this.kelvin = ((this.farenheit-32)*5/9)+273.15;
    
    }

    convertkelvin(): void {
      console.log("HOLI");
      this.celsius = this.kelvin-273.15;
      this.farenheit = ((this.kelvin-273.15)*9/5)+32;
    
    }

  constructor() { }


  
}
