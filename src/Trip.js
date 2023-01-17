class Trip {
  constructor(user, data) {
    this.allData = data;
    this.currentUser = user;
    this.currentDate = user.currentDate;
    this.currentUserTrips = data
      .filter(trip => trip.userID === user.id)
    
    this.pendingTrips = this.currentUserTrips
      .filter(trip => trip.status === 'pending')
    
    this.pastTrips = this.currentUserTrips
      .filter(trip => (new Date(trip.date) < this.currentDate && trip.status !== "pending"));
    
    this.upcomingTrips = this.currentUserTrips
      .filter(trip => (new Date(trip.date) >= this.currentDate && trip.status !== "pending"));

    this.tripsThisYear = this.currentUserTrips
      .filter(trip => (new Date(trip.date).getFullYear() === this.currentDate.getFullYear()));
  }
}

export default Trip;