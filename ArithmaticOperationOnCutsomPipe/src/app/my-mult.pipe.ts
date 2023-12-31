import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult',
  standalone: true,
})
export class MyMultPipe implements PipeTransform {
  transform(value: any, ...args: any[]): unknown {
    if (value && args) {
      return value * args[0];
    }
    return 'Invalud paramenters';
  }
}
