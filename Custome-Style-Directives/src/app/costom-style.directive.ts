import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCostomStyle]',
  standalone: true,
})
export class CostomStyleDirective {
  constructor(private obj: ElementRef) {
    this.obj.nativeElement.style.background = 'yellow';
    this.obj.nativeElement.style.fontWeight = 'bold';
  }
}
