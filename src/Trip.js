class Trip {
  constructor(user, data) {
    this.currentDate = user.currentDate;
    this.currentUserTrips = data
      .filter(trip => trip.userID === user.id)
    
    this.pendingTrips = this.currentUserTrips
      .filter(trip => trip.status === 'pending')
    
    this.pastTrips = this.currentUserTrips
      .filter(trip => (new Date(trip.date) < this.currentDate && trip.status !== "pending"));
    
    this.upcomingTrips = this.currentUserTrips
      .filter(trip => (new Date(trip.date) >= this.currentDate && trip.status !== "pending"));
  }

  // getTotalCost() {
  //   return this.currentTrips.reduce((acc, curr) => {
  //     const curCost = new Destination
  //   }, 0)
  // }

}

export default Trip;