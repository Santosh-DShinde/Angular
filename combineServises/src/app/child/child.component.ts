import { Component } from '@angular/core';
import { NumberSerService } from '../number-ser.service';
import { StringSerService } from '../string-ser.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers: [NumberSerService, StringSerService]
})

export class ChildComponent {
  public countCapital: any;
  public isPrime: any;

  constructor(private obj1: NumberSerService, private obj2: StringSerService) {
    this.isPrime = this.obj1.CheckPrime(12);
    this.countCapital = this.obj2.CountCapital("I Am Learning The Angular")
  }
}
