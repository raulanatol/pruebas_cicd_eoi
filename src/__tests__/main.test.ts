import { add, subtract } from '../main';

describe('main', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(2, 4)).toBe(6);
    });
  });

  describe('subtract', () => {
    it('should subtract two numbers', () => {
      expect(subtract(4, 2)).toBe(6);
    });
  });
});
