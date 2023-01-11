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


//Global Variables
let currentUser;
let allTravelers;
let allTrips;
let allDestinations;

//Functions
function fetchStart() {
  apiCalls().then(data => {
    allTravelers = data[0].travelers.map(user => new Traveler(user));
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
  // displayPastTrips(userTrips);
  // displayUpcomingTrips(userTrips);
  displayPendingTrips(userTrips);
}

function displayPastTrips(data) {
  const pastTrips = data.getTripsByStatus('approved');
  
}

function displayUpcomingTrips(data) {

}

function displayPendingTrips(data) {
  const pendTrips = data.getTripsByStatus('pending')
  pendTrips.forEach(trip => {
    pendingTripBox.innerHTML += 
    `<div class="trip-card">
      <header>${trip.destinationID}</header>
      <p>Date: ${trip.date}</p>
      <p>Duration: ${trip.duration} days</p>
    </div>`
  })
}

//Event Listeners

window.addEventListener('load', fetchStart)