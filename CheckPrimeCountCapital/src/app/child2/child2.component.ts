import { Component } from '@angular/core';
import { StringServService } from '../string-serv.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  providers: [StringServService]
})
export class Child2Component {
  public result: any;
  public name_str: string = "I Am Learning Angular";

  constructor(private obj: StringServService) {
    this.result = this.obj.CountCapital(this.name_str);
  }
}
