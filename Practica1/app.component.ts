import { Component, OnInit } from '@angular/core';


@Component({
  // es un nombre que se utiliza para enyectar este componante donde queremos
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  nombre = "Pepín";
 
  constructor(){}
  // en este método se pone los intrucción que queremos ejecutar primero; antes del constructor
  ngOnInit(): void {
    var counter = 0;
    var statue:boolean = true;
    
    setInterval(()=>{
      if(statue){
        counter++;
        this.nombre += "*";
        console.log(counter);
       }else{
        var tempNombre = this.nombre;
        this.nombre = tempNombre.substring(0,(tempNombre.length)-1);
      }
      if(this.nombre.length > 15 ){
        statue =false;
      }else if(this.nombre.length<6){
        statue =true;
      }
    },500)
  }
 
}
