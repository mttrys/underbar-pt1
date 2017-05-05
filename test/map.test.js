_ = require('../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });

  it('Addtional Test: maps every string in an array of strings to their self-concated strings', () => {
    const arr = ['a','b','c'];
    const mappedArr = _.map(arr, (el) => el + el);
    expect(mappedArr).toEqual(['aa','bb','cc']);
  });

  it('Addtional Test: maps every numbers in an object of numbers to their square', () => {
    const obj = {
      'a': 1,
      'b': 2,
      'c': 3
    }

    const mappedArr = _.map(obj, (el) => el * el);
    expect(mappedArr).toEqual([1,4,9]);
  });

});