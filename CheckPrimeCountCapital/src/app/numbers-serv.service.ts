import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumbersServService {

  constructor() { }

  public CheckPrime(value: number): string {
    for (let i = 2; i < value; i++) {
      if ((value % i) == 0) {
        return "not prime number.";
      }
    } return "prime number";
  }
}
