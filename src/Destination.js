class Destination {
  constructor(tripData, destData) {
    this.tripData = tripData;
    this.allDests = destData;
    this.currentDest = destData.find(dest => dest.id === tripData.destinationID);
    this.name = this.currentDest.destination;
    this.lodgingCostPerDay = this.currentDest.estimatedLodgingCostPerDay;
    this.flightCostPerPerson = this.currentDest.estimatedFlightCostPerPerson;
    this.image = this.currentDest.image
    this.alt = this.currentDest.alt
  }

  getAllCost() {
    const stayCost = this.tripData.duration * (this.lodgingCostPerDay * this.tripData.travelers)
    const flightCost = this.tripData.travelers * this.flightCostPerPerson
    let totalCost = stayCost + flightCost
    return totalCost += (totalCost * 0.1)
  }
}

export default Destination;