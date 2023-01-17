import chai from 'chai';
const expect = chai.expect;
import Traveler from '../src/Traveler';
import { travelerData } from './test-data';

describe('Traveler Class Testing', () => {
  let curTraveler;
  
  beforeEach(() => {
    const curDate = new Date("2020/07/17");
    curTraveler = new Traveler(travelerData, curDate);
  })
  
  it('Should be a function', () => {
    expect(Traveler).to.be.a('function');
  });

  it('Should be an instance of Traveler', () => {
    expect(curTraveler).to.be.an.instanceOf(Traveler);
  });

  it('Should take in a traveler object', () => {
    expect(curTraveler.current).to.deep.equal({
      id: 1,
      name: "Ham Leadbeater",
      travelerType: "relaxer"
    })
  });

  it('Should take in a date', () => {
    expect(curTraveler.currentDate).to.deep.equal(new Date("2020/07/17"));
  })

  it('Should have an ID', () => {
    expect(curTraveler.id).to.equal(1);
  })

  it('Should have a name', () => {
    expect(curTraveler.name).to.equal('Ham Leadbeater');
  })

  it('Should have a Traveler Type', () => {
    expect(curTraveler.travelerType).to.equal('relaxer');
  })

  it('Should have a password', () => {
    expect(curTraveler.password).to.equal('travel');
  })

  it('Should have a method that returns a first name', () => {
    expect(curTraveler.getFirstName()).to.equal('Ham');
  })

});