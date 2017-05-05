const _ = require('../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

  it('Addtional Test: will return true if no callback is supplied', () => {
      const nums = [1, 3, 5, 7];
      expect(_.some(nums)).toBe(true);
    });

  it('Addtional Test: returns true if any string is a', () => {
    const strings = ['b','c','d','a'];
    expect(_.some(strings, str => str === 'a')).toBe(true);
  });

  it('Addtional Test: returns false if no string is a', () => {
    const strings = ['b','c','d'];
    expect(_.some(strings, str => str === 'a')).toBe(false);
  });


});
