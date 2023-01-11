//Imports
import './css/styles.css';
import apiCalls from './apiCalls';
import Traveler from './Traveler';

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
}

function generateRandomIndex() {
  return Math.floor(Math.random() * allTravelers.length);
}

function displayWelcomeMessage() {
  welcomeText.innerText = `Welcome ${currentUser.getFirstName()}`;
}

function displayAllTrips() {
  displayPastTrips();
  displayUpcomingTrips();
  displayPendingTrips();
}

function displayPastTrips() {

}

function displayUpcomingTrips() {

}

function displayPendingTrips() {

}

//Event Listeners

window.addEventListener('load', fetchStart)