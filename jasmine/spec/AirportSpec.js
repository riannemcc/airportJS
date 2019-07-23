// "use strict";

describe("Airport", function() {

  beforeEach(function() {
    airport = new Airport();
  });

  it("instructs a plane to land", function() {
    expect(airport.land).toBeTruthy();
    })
});
