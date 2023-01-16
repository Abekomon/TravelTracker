class Traveler {
  constructor(data, date) {
    this.currentDate = date;
    this.id = data.id;
    this.name = data.name;
    this.travelerType = data.travelerType;
    this.password = "travel";
  }
  
  getFirstName() {
    return this.name.split(' ')[0];
  }
}
  
export default Traveler;