import { Component, OnInit, Input } from '@angular/core';

import { Contextmenu } from '../../contextmenu/components/contextmenu';
import { ContextmenuDirective, ContextmenuItem } from '../../contextmenu/directive';

@Component({
  moduleId: module.id,
  selector: 'domain-table',
  templateUrl: 'domain-table.component.html',
  directives: [Contextmenu, ContextmenuDirective, ContextmenuItem],
  providers: []
})
export class DomainTableComponent implements OnInit {
  @Input() domains;

  constructor() { }

  ngOnInit() { }

}