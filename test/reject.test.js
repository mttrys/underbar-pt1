const _ = require('../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const nums = [2, 4, 5, 6, 7, 8, 10, 11];
    expect(_.reject(nums, num => num % 2 === 1)).toEqual([2, 4, 6, 8, 10]);
  });

  it('rejects null values from an object', () => {
    const order = {
      entree: 'burger',
      side: null,
      condiment: 'ketchup',
      drink: null,
      dessert: 'cookie'
    };

    const orderItems = _.reject(order, (value) => value === null);
    expect(orderItems).toEqual(['burger', 'ketchup', 'cookie']);
  });

  it('Addtional Test: rejects even numbers from an array', () => {
    const nums = [2, 4, 5, 6, 7, 8, 10, 11];
    expect(_.reject(nums, num => num % 2 === 0)).toEqual([5,7,11]);
  });

  it('Addtional Test: rejects strings and even numbers from an array', () => {
    const nums = [2, 4, 5, 'a', 6, 7, 'c', 8, 10, 11, 'd'];
    expect(_.reject(nums, num => num % 2 === 0 || typeof num === 'string')).toEqual([5,7,11]);
  });

  it('Addtional Test: rejects string values from an object', () => {
    const order = {
      entree: 'burger',
      side: null,
      condiment: 'ketchup',
      drink: null,
      dessert: 'cookie'
    };

    const orderItems = _.reject(order, (value) => typeof value === 'string');
    expect(orderItems).toEqual([null, null]);
  });


});