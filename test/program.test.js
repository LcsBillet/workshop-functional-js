var expect = require('chai').expect;

var transformCheckpoint = require('../src/program').transformCheckpoint;

var param = {
  id: 'whataw0nd3rful1d',
  uuid: 'whataw0nd3rful1d',
  address: 'unknown',
  addressType: 'unknown',
  connectable: true,
  advertisement: {
    localName: undefined,
    txPowerLevel: undefined,
    manufacturerData: undefined,
    serviceData: [],
    serviceUuids: [ 'abcd' ]
  },
  rssi: -66,
  services: null,
  state: 'outofcontrol'
}


describe('Function transformCheckpoint', function() {

  it('Function transformCheckpoint without parameter should return false', function() {
    expect(transformCheckpoint()).to.be.false;
  });

});

describe('Parameter mutated with transformCheckpoint', function() {

  it('Parameter should be mutated with the function transformCheckpoint', function() {
    expect(param).to.not.eql(transformCheckpoint(param));
  });

});