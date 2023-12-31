import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})

export class ChildComponent {

  @Output() public childData = new EventEmitter();
  @Input() public inputData: any; // done --> holds the data sent from the parent component

  constructor() {
    this.emitDataToParent();
  }
  public emitDataToParent(): any {
    this.childData.emit('Hello from parent');
  }
}
