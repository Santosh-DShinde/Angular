import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
  <label class="label-name">Marvellous Infosystems : </label>
    <input type="text" class="input-text" placeholder="Enter name">
`,
  styles: [`
    .label-name {
      color: brown;
      text-align: center;
    }
    .input-text{
      text-align: center;
      padding:5px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 2px 0 7px rgba(480, 0, 10, 1);
    }
  `]
})
export class AppComponent {
  public name: string = "Angular";
}
