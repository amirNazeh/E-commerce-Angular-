 import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ImgStyle]'
})
export class ImgStyleDirective {
  @Input() radius1: string = '60px';
  @Input("ImgStyle") radius2: string = '70px';
  constructor(private element : ElementRef) {

  }
  ngOnChanges(): void {
    this.element.nativeElement.style.borderRadius = `${this.radius2}`;

  }

  @HostListener('mouseover') func1() {
    this.element.nativeElement.style.borderRadius = `${this.radius1}`;
    this.element.nativeElement.style.opacity = '.8';
  }
  @HostListener('mouseout') func2() {
    this.element.nativeElement.style.borderRadius = `${this.radius2}`;
    this.element.nativeElement.style.opacity = '1';
  }

}
