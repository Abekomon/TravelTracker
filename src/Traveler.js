class Traveler {
  constructor(data, date) {
    this.currentDate = date;
    this.id = data.id;
    this.name = data.name;
    this.travelerType = data.travelerType;
  }
  
  getFirstName() {
    return this.name.split(' ')[0];
  }
}
  
export default Traveler;