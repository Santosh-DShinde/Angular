import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public slogen: string = "Marvellous Infosystem";

  public fun(): string {
    this.slogen = "Educating for Better tomorrow";
    return this.slogen;
  }
}

// public fun(): string {
//   if (this.flag === false) {
//     this.slogen = "Educating for Better tomorrow";
//     this.flag = true;
//   } else {
//     this.slogen = "Marvellous Infosystem";
//     this.flag = false;
//   } return this.slogen;
// }
