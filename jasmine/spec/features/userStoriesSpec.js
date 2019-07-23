describe("Feature test", function() {
  var plane;
  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it("instructs a plane to land", function() {
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });
});
