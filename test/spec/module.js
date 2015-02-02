var expect = chai.expect;

describe("MyModule", function() {

  var sandbox;

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
    sandbox.stub(window.console, "log");
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe("test function", function() {

    it("should return that it is Batman", function() {
      var test = TypeFunction.create();

      test();
    });

  });

});
