import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd',
  standalone: true,
})
export class MyAddPipe implements PipeTransform {
  transform(value: any, ...args: any[]): unknown {
    if (value && args) {
      return value + args[0];
    }
    return 'Invalud paramenters';
  }
}
