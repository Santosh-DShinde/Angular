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
  public className: string = "Marvellous Infosystems";

  public toUpper(): string {
    return this.className = this.className.toUpperCase();
  }
  public toLower(): string {
    return this.className = this.className.toLowerCase();
  }
}
