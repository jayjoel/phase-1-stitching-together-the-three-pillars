const { expect } = require('chai');
require('./helpers'); // Include the helpers file which sets up the test environment

describe('index.js', () => {
  it('exists', () => {
    // Test that testVar exists as expected
    expect(testVar).to.exist;
    expect(testVar).to.deep.equal({}); // Ensure testVar matches the expected value
  });

  // You can add more tests here as needed for your application
});
