const _ = require('../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (acc, num) => acc + num, 0);
    expect(result).toEqual(15);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (a, b) => a + b);
    expect(result).toEqual(15);
  });

  it('Addtional Test: reduces an array of bools to a bool, *with* an explicit initial value for the accumulator', () => {
    const bools = [true, true, true, true];
    const result = _.reduce(bools, (acc, bool) => acc && bool, true);
    expect(result).toEqual(true);
  });

  it('Addtional Test: reduces an array of bools to a bool, *without* an explicit initial value for the accumulator', () => {
    const bools = [true, true, true, true];
    const result = _.reduce(bools, (acc, bool) => acc && bool);
    expect(result).toEqual(true);
  });

  it('Addtional Test: reduces an array of strings to a string, *with* an explicit initial value for the accumulator', () => {
    const strings = ['a','b','c','d'];
    const result = _.reduce(strings, (acc, str) => acc + str, 'dcba');
    expect(result).toEqual('dcbaabcd');
  });

  it('Addtional Test: reduces an array of strings to a string, *without* an explicit initial value for the accumulator', () => {
    const strings = ['a','b','c','d'];
    const result = _.reduce(strings, (acc, str) => acc + str);
    expect(result).toEqual('abcd');
  });

});