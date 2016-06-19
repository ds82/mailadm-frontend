import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'contextmenu',
  templateUrl: 'contextmenu.html',
  styles: [
    `
      .dropdown-menu {
        position: absolute;
        display: block;
      }
      .hidden {
        display: none;
      }
    `
  ]
})
export class Contextmenu implements OnInit {
  isHidden : boolean = true;
  top: Number;
  left: Number;

  private item: any;

  constructor() { }
  ngOnInit() { }

  public open(top: Number, left: Number, item: any) {
    this.top = top;
    this.left = left;
    this.isHidden = false;
    this.item = item;
  }

  public close() {
    this.isHidden = true;
  }

  public get(path?: string) {
    return this.item;
  }


}