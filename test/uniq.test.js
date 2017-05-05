const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('de-dups a list of strings', () => {
    const strings = ['A','A','B','C','D','A','D']
    expect(_.uniq(strings)).toEqual(['A','B','C','D']);
  })

  it('Addtional Test: de-dups a list of bools', () => {
    const bools = [true, false, true, false]
    expect(_.uniq(bools)).toEqual([true, false]);
  })

});