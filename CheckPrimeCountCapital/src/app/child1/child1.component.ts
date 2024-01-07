import { Component } from '@angular/core';
import { NumbersServService } from '../numbers-serv.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  providers: [NumbersServService]
})
export class Child1Component {
  public result: any;
  public inputNumber: number= 17;
  constructor(private obj: NumbersServService) {
    this.result = this.obj.CheckPrime(this.inputNumber);
  }
}
