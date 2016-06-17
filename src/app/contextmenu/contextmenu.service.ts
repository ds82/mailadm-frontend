import { Injectable } from '@angular/core';

@Injectable()
export class ContextmenuService {
  static instance : ContextmenuService = null;
  constructor() { }

  static getInstance() {
    if (ContextmenuService.instance === null) {
      ContextmenuService.instance = new ContextmenuService();
    }
    return ContextmenuService.instance;
  }


}