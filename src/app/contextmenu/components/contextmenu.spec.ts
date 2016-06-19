import {
  beforeEachProviders,
  beforeEach,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import {Contextmenu} from './contextmenu';

// beforeEachProviders(() => [Contextmenu]);

describe('Contextmenu', () => {

  var contextmenu: Contextmenu;

  beforeEach(() => {
    contextmenu = new Contextmenu();
  });

  describe('-> open', () => {

    it('should set top/left coordinates', () => {
      const top: Number = 10;
      const left: Number = 50;
      const item = {};

      contextmenu.open(top, left, item);

      expect(contextmenu.top).toBe(top);
      expect(contextmenu.left).toBe(left);
    });


    it('should open the menu', () => {
      contextmenu.open(10, 20, {});

      expect(contextmenu.isHidden).toBe(false);
    });

    it('should set the item', () => {
      const item = {a:{b:1}};
      contextmenu.open(50, 60, item);

      expect(contextmenu.get()).toBe(item);
    });
  });

  describe('-> close', () => {

    it('should close the menu', () => {
      contextmenu.open(100, 200, {});
      expect(contextmenu.isHidden).toBe(false);

      contextmenu.close();
      expect(contextmenu.isHidden).toBe(true);
    });

  });

  describe('-> get', () => {

    let item;

    beforeEach(() => {
      item = {a: {b: 10}};
    });

    it('should access the current item', () => {
      contextmenu.open(0, 0, item);

      expect(contextmenu.get()).toEqual(item);
    });

    it('should return path of item', () => {
      expect(contextmenu.get('a')).toEqual(item.a);

    });

  });

})