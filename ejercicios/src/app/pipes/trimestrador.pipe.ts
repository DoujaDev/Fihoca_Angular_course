import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimestrador'
})
export class TrimestradorPipe implements PipeTransform {

  transform(date: any, ...args: any[]): any {

    let month = date.getMonth() + 1;

    return (Math.ceil(month / 3)) +" trimestre" ;

    
  }

}
