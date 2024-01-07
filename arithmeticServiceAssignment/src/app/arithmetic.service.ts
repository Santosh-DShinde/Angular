import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }

  Add(value1: number, value2: number) {
    return value1 + value2;
  }

  public Sub(value1: number, value2: number) {
    return value1 - value2;
  }
}
