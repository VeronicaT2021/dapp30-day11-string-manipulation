const { assert } = require("console");

const Strings = artifacts.require('Strings');

contract('Strings', () => {
  let strings = null;
  before(async () => {
    strings = await Strings.deployed();
  });

  it('should return the length of a string', async () => {
    const length = await strings.length('abc');
    assert(length.toNumber() === 3);
  })

  it('should concatenate 2 strings', async () => {
    const concatenatedStr = await strings.concatenate('abc', 'def')
    assert(concatenatedStr === 'abcdef')
  })
});

