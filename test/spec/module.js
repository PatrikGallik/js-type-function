var expect = chai.expect;

describe("TypeFunction", function() {

  var sandbox;

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
    sandbox.stub(window.console, "log");
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe("create function", function() {

  //

  });

});
