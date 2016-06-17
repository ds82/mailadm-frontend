import {Directive, Input, ElementRef, Renderer, HostListener} from '@angular/core';
// import {NgStyle} from '@angular/common';

import {ContextmenuService} from './contextmenu.service';
import {Contextmenu} from './components/contextmenu';

@Directive({
  selector: '[contextmenu]',
  providers: [ContextmenuService]
})
export class ContextmenuDirective {
  @Input() menu: Contextmenu;

  constructor(el: ElementRef, renderer: Renderer, $contextmenu: ContextmenuService) {
    // el.nativeElement.style.color = 'red';
    // renderer.setElementStyle(el.nativeElement, 'color', 'red');
  }

  @HostListener('document:click') onDocumentClick() {
    this.menu.close();
  }
}


@Directive({
  selector: '[contextmenu-item]'
})
export class ContextmenuItem {
  @Input('contextmenu-item') contextmenuItem: any;

  constructor(private container: ContextmenuDirective) {
  }

  @HostListener('contextmenu', ['$event']) onRightClick($event: MouseEvent) {
    $event.preventDefault();
    this.container.menu.open($event.clientY, $event.clientX, this.contextmenuItem);
    console.log('-> right click');
  }
}
