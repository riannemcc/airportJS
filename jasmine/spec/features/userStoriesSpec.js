describe("landing", function() {

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it("instructs a plane to land", function() {
      expect(airport.land(plane)).toEqual(plane);
    });
  })
