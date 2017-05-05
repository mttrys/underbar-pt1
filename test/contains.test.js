const _ = require('../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(_.contains(nums, 4)).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(_.contains(nums, 7)).toBe(false);
  });


  it('returns true if the target value is among the values of an object', () => {
    const ponies = {
      'pony1': 'Fluttershy',
      'pony2': 'Pinkie Pie',
      'pony3': 'Rainbow Dash',
      'pony4': 'Rarity'
    };
    expect(_.contains(ponies, 'Rarity')).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    const ponies = {
      'pony1': 'Fluttershy',
      'pony2': 'Pinkie Pie',
      'pony3': 'Rainbow Dash',
      'pony4': 'Rarity'
    };
    expect(_.contains(ponies, 'Applejack')).toBe(false);
  });

  it('Addtional Test: returns true if an array contains the target', () => {
    const alpha = ['A','B','C','D','E'];
    expect(_.contains(alpha, 'E')).toBe(true);
  });

  it('Addtional Test: returns false if the target value is not among the values of an object', () => {
    const alpha = {
      'a': 'a0',
      'b': 'b1',
      'c': 'c2',
      'd': 'd3'
    };
    expect(_.contains(alpha, 'a')).toBe(false);
  });

});