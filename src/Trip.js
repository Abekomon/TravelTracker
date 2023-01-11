class Trip {
  constructor(user, data) {
    this.currentTrips = data.filter(trip => trip.userID === user.id)
  }

  getTripsByStatus(type) {
    return this.currentTrips.filter(trip => trip.status === type)
  }

}

export default Trip;