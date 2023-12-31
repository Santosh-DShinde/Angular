import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true,
})
export class MyRevPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    console.log('Inside the transform method.');
    if (value) {
      return value.split('').reverse().join('');
    }
    return null;
  }
}
