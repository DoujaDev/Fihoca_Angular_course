import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asteriscador'
})
export class AsteriscadorPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    let numeroAsteriscos:number = Number(args[0]);

    return "*".repeat(numeroAsteriscos) +value+ "*".repeat(numeroAsteriscos);
  }

}
