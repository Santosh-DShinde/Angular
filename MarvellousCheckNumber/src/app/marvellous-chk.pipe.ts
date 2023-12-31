import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true,
})
export class MarvellousChkPipe implements PipeTransform {
  transform(value: number, params: string): string {
    if (params == 'prime') {
      for (let i = 2; i < value; i++) {
        if (value % i == 0) {
          return 'It is not prime number';
        }
      }
      return 'It is prime number';
    } else if (params == 'perfect') {
      var sum: number = 0;
      for (let j = 1; j < value; j++) {
        if (value % j == 0) {
          sum += j;
        }
      }
      if (sum == value) {
        return 'It is perfect number';
      } else {
        return 'It is not perfect number';
      }
    } else if (params == 'even') {
      if (value % 2 == 0) {
        return 'It is even number.';
      } else {
        return 'It is not even.';
      }
    } else {
      return 'Invalid parameters\n select prime, even or perfect params';
    }
  }
}
