'use strict';

describe('Service: AccountAdder', function () {

  // load the service's module
  beforeEach(module('gauthApp'));

  // instantiate service
  var AccountAdder;
  beforeEach(inject(function (_AccountAdder_) {
    AccountAdder = _AccountAdder_;
  }));

  it('should do something', function () {
    expect(!!AccountAdder).toBe(true);
  });

});
