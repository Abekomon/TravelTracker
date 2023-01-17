import chai from 'chai';
const expect = chai.expect;
import Trip from '../src/Trip';
import Traveler from '../src/Traveler';
import { tripData, travelerData } from './test-data';

describe('Trip Class Testing', () => {
  let trips;
  let curDate;
  beforeEach(() => {
    curDate = new Date("2020/07/17");
    const curUser = new Traveler(travelerData, curDate);
    trips = new Trip(curUser, tripData);
  });
  
  it('Should be a function', () => {
    expect(Trip).to.be.a('function');
  });

  it('Should be an instance of Trip', () => {
    expect(trips).to.be.an.instanceOf(Trip);
  });

  it('Should take in all available trips', () => {
    expect(trips.allData).to.equal(tripData);
  });

  it('Should take in a Traveler instance', () => {
    expect(trips.currentUser).to.be.an.instanceOf(Traveler);
  });

  it('Should store a date', () => {
    expect(trips.currentDate).to.deep.equal(new Date("2020/07/17"))
  });

  it('Should store all trips related to the current user', () => {
    expect(trips.currentUserTrips).to.deep.equal([
      {
        id: 1,
        userID: 1,
        destinationID: 49,
        travelers: 1,
        date: "2020/05/16",
        duration: 8,
        status: "approved",
        suggestedActivities: [ ]
      },
      {
        id: 8,
        userID: 1,
        destinationID: 39,
        travelers: 6,
        date: "2022/02/07",
        duration: 4,
        status: "approved",
        suggestedActivities: [ ]
      },
      {
        id: 10,
        userID: 1,
        destinationID: 50,
        travelers: 6,
        date: "2022/07/23",
        duration: 17,
        status: "pending",
        suggestedActivities: [ ]
      },
    ]);
  });

  it('Should store all pending related to the current user', () => {
    expect(trips.pendingTrips).to.deep.equal([
      {
        id: 10,
        userID: 1,
        destinationID: 50,
        travelers: 6,
        date: "2022/07/23",
        duration: 17,
        status: "pending",
        suggestedActivities: [ ]
      }
    ]);
  });

  it('Should store all past trips related to the current user', () => {
    expect(trips.pastTrips).to.deep.equal([
      {
        id: 1,
        userID: 1,
        destinationID: 49,
        travelers: 1,
        date: "2020/05/16",
        duration: 8,
        status: "approved",
        suggestedActivities: [ ]
      }
    ]);
  });

  it('Should store all upcoming trips related to the current user', () => {
    expect(trips.upcomingTrips).to.deep.equal([
      {
        id: 8,
        userID: 1,
        destinationID: 39,
        travelers: 6,
        date: "2022/02/07",
        duration: 4,
        status: "approved",
        suggestedActivities: [ ]
      }
    ]);
  });

  it('Should store all trips in the current year related to the current user', () => {
    expect(trips.tripsThisYear).to.deep.equal([
      {
        id: 1,
        userID: 1,
        destinationID: 49,
        travelers: 1,
        date: "2020/05/16",
        duration: 8,
        status: "approved",
        suggestedActivities: [ ]
      }
    ]);
  });

});