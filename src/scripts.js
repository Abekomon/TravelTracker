//Imports
import './css/styles.css';
import apiCalls from './apiCalls';
import Traveler from './Traveler';
import Trip from './Trip';
import Destination from './Destination';

// import './images/turing-logo.png'

//Query Selectors
const pastTripBox = document.getElementById('pastTrips');
const upcomingTripBox = document.getElementById('upcomingTrips');
const pendingTripBox = document.getElementById('pendingTrips');
const welcomeText = document.getElementById('welcome');
const costText = document.getElementById('yearCost')

//Global Variables
const currentDate = new Date("2020/07/17");
let currentUser;
let allTravelers;
let allTrips;
let allDestinations;

//Functions
function fetchStart() {
  apiCalls().then(data => {
    allTravelers = data[0].travelers.map(user => new Traveler(user, currentDate));
    allTrips = data[1].trips;
    allDestinations = data[2].destinations;
    currentUser = allTravelers[generateRandomIndex()];
    loadHandler();
  })
}

function loadHandler() {
  displayWelcomeMessage();
  displayAllTrips();
}

function generateRandomIndex() {
  return Math.floor(Math.random() * allTravelers.length);
}

function displayWelcomeMessage() {
  welcomeText.innerText = `Welcome ${currentUser.getFirstName()}`;
}

function displayAllTrips() {
  const userTrips = new Trip(currentUser, allTrips);
  displayTripType(userTrips, "past", pastTripBox);
  displayTripType(userTrips, "upcoming", upcomingTripBox);
  displayTripType(userTrips, "pending", pendingTripBox);
  displayYTDCost(userTrips);
}

function displayTripType(data, type, location) {
  data[`${type}Trips`].forEach(trip => {
    const dest = new Destination(trip, allDestinations);
    location.innerHTML += 
    `<div class="trip-card">
      <header>${dest.name}</header>
      <p>Date: ${trip.date}</p>
      <p>Travelers: ${trip.travelers}</p>
      <p>Duration: ${trip.duration} days</p>
      <p>Total Cost: $${Number(dest.getAllCost()).toLocaleString()}</p>
    </div>`
  });
}

function displayYTDCost(data) {
  const cost = data.tripsThisYear.reduce((acc, curr) => {
    const dest = new Destination(curr, allDestinations);
    return acc = acc + dest.getAllCost()
  }, 0)
  costText.innerText = `Your total cost this year is: $${(Number(cost).toLocaleString())}`
}

//Event Listeners

window.addEventListener('load', fetchStart)