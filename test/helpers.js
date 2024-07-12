const { expect } = require('chai');
const fs = require('fs');
const jsdom = require('mocha-jsdom');
const path = require('path');
const babel = require('babel-core');

const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8');

// Use babel to transform ES6 JavaScript code to ES5 for compatibility
const babelResult = babel.transformFileSync(path.resolve(__dirname, '..', 'index.js'), {
  presets: ['env']
});

const src = babelResult.code;

// Set up the DOM environment using mocha-jsdom
jsdom({
  html,
  src
});

// Mock testVar to ensure it's available globally
global.testVar = {};

// You can add more setup code here as needed for your tests

// Example test to ensure DOM elements are correctly loaded
describe('DOM elements', () => {
  it('should have articles with media-post class', () => {
    const articles = document.querySelectorAll('.media-post');
    expect(articles.length).to.equal(5); // Assuming there are 5 articles as per your index.html
  });

});

