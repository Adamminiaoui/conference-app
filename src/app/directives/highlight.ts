import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

/**
 * Directive d'attribut personnalisée : met en surbrillance l'élément hôte au survol.
 * Usage : <div appHighlight="#eef4ff">...</div>
 */
@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  readonly appHighlight = input<string>('#eef4ff');

  @HostListener('mouseenter') onEnter() {
    this.el.nativeElement.style.backgroundColor = this.appHighlight() || '#eef4ff';
  }

  @HostListener('mouseleave') onLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
