'use strict';

const expect = require('chai').expect;
const fsButton = require('../floating-switch-button');

describe('#fsButton', () => {
  it('Renders where it should', () => {
    let component = document.getElementById('fs-btn-90000000000000');
    expect(component).to.equal('');
  })
});
