import chai from 'chai';
const expect = chai.expect;
import Destination from '../src/Destination';
import { destinationData, tripData } from './test-data';

describe('Destination Class Testing', () => {
  let curDest;
  
  beforeEach(() => {
    const curTrip = tripData[0];
    curDest = new Destination(curTrip, destinationData)
  })
  
  it('Should be a function', () => {
    expect(Destination).to.be.a('function');
  });

  it('Should be an instance of the Destination class', () => {
    expect(curDest).to.be.an.instanceOf(Destination);
  });

  it('Should take in and store a trip', () => {
    expect(curDest.tripData).to.deep.equal(
      {
        id: 1,
        userID: 1,
        destinationID: 2,
        travelers: 1,
        date: "2020/05/16",
        duration: 8,
        status: "approved",
        suggestedActivities: [ ]
      }
    );
  });

  it('Should take in and store all destination data', () => {
    expect(curDest.allDests).to.deep.equal(destinationData);
  })

  it('Should store the current destination', () => {
    expect(curDest.currentDest).to.deep.equal(
      {
        id: 2,
        destination: "Stockholm, Sweden",
        estimatedLodgingCostPerDay: 100,
        estimatedFlightCostPerPerson: 780,
        image: "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "city with boats on the water during the day time"
      }
    );
  });

  it('Should store the name of the current destination', () => {
    expect(curDest.name).to.equal('Stockholm, Sweden');
  });

  it('Should store the lodging cost of the current destination', () => {
    expect(curDest.lodgingCostPerDay).to.equal(100);
  });

  it('Should store the flight cost of the current destination', () => {
    expect(curDest.flightCostPerPerson).to.equal(780);
  });

  it('Should store the current destination\'s image url', () => {
    expect(curDest.image).to.equal('https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')
  });

  it('Should store the alt text of the image of the current destination', () => {
    expect(curDest.alt).to.equal('city with boats on the water during the day time')
  });

  it('Should have a method to get the total cost of the given trip to the current destination', () => {
    expect(curDest.getAllCost()).to.equal(1738);
  });
});