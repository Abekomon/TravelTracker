class Destination {
  constructor(tripData, destData) {
    this.currentDest = destData.find(dest => dest.id === tripData.destinationID);
    this.name = this.currentDest.destination;
    this.lodgingCostPerDay = this.currentDest.estimatedLodgingCostPerDay;
    this.flightCostPerPerson = this.currentDest.estimatedFlightCostPerPerson;
    this.image = this.currentDest.image
    this.alt = this.currentDest.alt
  }
}

export default Destination;