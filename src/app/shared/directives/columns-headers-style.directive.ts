import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColumnsHeadersStyle]',
  standalone: true,
})
export class ColumnsHeadersStyle implements OnInit {
  @Input('appColumnsHeadersStyle') columnsHeadersStyle: any;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'font-size', '20px');
  }
}