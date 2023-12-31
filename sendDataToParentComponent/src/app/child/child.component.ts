import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Output() public projectName = new EventEmitter();
  public sendData(prjName: string) {
    return this.projectName.emit(prjName);
  }
}
