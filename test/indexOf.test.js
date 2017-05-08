const _ = require('../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    const arr = ['foo', 'bar', 'baz'];
    expect(_.indexOf(arr, 'foo')).toBe(0);
  });

  it('returns the index of a value at the end of an array', () => {
    const arr = ['foo', 'bar', 'baz'];
    expect(_.indexOf(arr, 'baz')).toBe(2);
  });

  it('returns -1 for a missing value', () => {
    const arr = ['foo', 'bar', 'baz'];
    expect(_.indexOf(arr, 'quux')).toBe(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    const arr = ['foo', 'bar', 'baz', 'bar', 'bar'];
    expect(_.indexOf(arr, 'bar')).toBe(1);
  });

  it('starts searching at the given offset', () => {
    const arr = ['foo', 'bar', 'baz', 'bar', 'bar'];
    expect(_.indexOf(arr, 'bar', 2)).toBe(3);
  });


  it('Addtional Test: index of a value at the beginning of an arrayLikeObect', () => {
    const arrayLikeObect = { length: 3, 0: 'a', 1: 'b', 2: 'c' }
    expect(_.indexOf(arrayLikeObect, 'a')).toBe(0);
  });

  it('Addtional Test: index of a value at the beginning of an arrayLikeObect', () => {
    const arrayLikeObect = { length: 3, 0: 'a', 1: 'b', 2: 'c' }
    expect(_.indexOf(arrayLikeObect, 'c')).toBe(2);
  });

  it('Addtional Test: -1 for a missing value in an arrayLikeObect', () => {
    const arrayLikeObect = { length: 3, 0: 'a', 1: 'b', 2: 'c' }
    expect(_.indexOf(arrayLikeObect, 'd')).toBe(-1);
  });

 it('Addtional Test: returns the first matching index when multiple matches in an arrayLikeObect', () => {
    const arrayLikeObect = { length: 3, 0: 'a', 1: 'b', 2: 'c' }
    expect(_.indexOf(arrayLikeObect, 'b')).toBe(1);
  });

  it('Addtional Test: starts searching at the given offset for an arrayLikeObect', () => {
    const arrayLikeObect = { length:6, 0:'a', 1:'b', 2:'c', 3:'c', 4:'a', 5:'b', 6:'c' }
    expect(_.indexOf(arrayLikeObect, 'b', 2)).toBe(5);
  });

});