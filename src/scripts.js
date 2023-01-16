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
const costText = document.getElementById('yearCost');
const dashboard = document.getElementById('dashboard');
const form = document.getElementById('form');
const nav = document.getElementById('nav');
const reqForm = document.getElementById('requestForm');
const formDest = document.getElementById('requestDestination');
const formDura = document.getElementById('requestDuration');
const formDate = document.getElementById('requestDate');
const formTrav = document.getElementById('requestTravelers');
const dashNavTab = document.getElementById('dashNav');
const reqNavTab = document.getElementById('reqNav');
const login = document.getElementById('loginSection');
const loginForm = document.getElementById('loginForm');
const loginUsername = document.getElementById('loginUsername');
const loginPassword = document.getElementById('loginPassword');


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
    // currentUser = allTravelers[generateRandomIndex()];
    loadHandler();
  })
}

function loadHandler() {
  displayAllTrips();
  generateForm();
}

// function generateRandomIndex() {
//   return Math.floor(Math.random() * allTravelers.length);
// }

function generateForm() {
  allDestinations.forEach(dest => {
    formDest.innerHTML += `<option value="${dest.id}">${dest.destination}</option>`
  })
  formDate.setAttribute("min", currentDate.toISOString().split('T')[0])
}

function changeLoginViews() {
  login.classList.add('hidden');
  nav.classList.remove('hidden');
  dashboard.classList.remove('hidden');
  costText.classList.remove('hidden');
  displayWelcomeMessage();
}

function displayWelcomeMessage() {
  welcomeText.innerText = `Welcome ${currentUser.getFirstName()}`;
}

function displayAllTrips() {
  let userTrips = new Trip(currentUser, allTrips);
  displayTripType(userTrips, "past", pastTripBox);
  displayTripType(userTrips, "upcoming", upcomingTripBox);
  displayTripType(userTrips, "pending", pendingTripBox);
  displayYTDCost(userTrips);
}

function displayTripType(data, type, location) {
  location.innerHTML = '';
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

function getFormData() {
  return {
    id: allTrips.length + 1,
    userID: currentUser.id,
    destinationID: Number(formDest.value),
    travelers: Number(formTrav.value),
    date: formDate.value.replaceAll("-", "/"),
    duration: Number(formDura.value),
    status: "pending",
    suggestedActivities: [ ]
  }
}

function postFormData() {
  const postData = getFormData();
  fetch("http://localhost:3001/api/v1/trips", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    if(response.ok){
      return response.json;
    } else {
      throw new Error('Something went wrong!')
    }
  }).then(updateValues())
    .catch(error => console.log(error))
}

function updateValues(){
  fetch(`http://localhost:3001/api/v1/trips`)
  .then(response => response.json())
  .then(data => {
    allTrips = data.trips;
    displayAllTrips();
  })
}

function changeTabView(){
  dashboard.classList.toggle("hidden");
  dashNavTab.classList.toggle("focused")
  form.classList.toggle("hidden");
  reqNavTab.classList.toggle("focused");
}

function loginCheck() {
  const user = Number(loginUsername.value.slice(-2));
  fetch(`http://localhost:3001/api/v1/travelers/${user}`)
  .then(response => response.json())
  .then(data => {
    const user = new Traveler(data, currentDate);
    if(user.password === loginPassword.value){
      currentUser = user;
      fetchStart();
      changeLoginViews();
    } else {
      console.log('Failed Login Attempt')
    }
  })

}

//Event Listeners

// window.addEventListener('load', fetchStart);

dashNavTab.addEventListener('click', () => {
  if(dashboard.classList.contains('hidden')){
    changeTabView();
  }
})

reqNavTab.addEventListener('click', () => {
  if(form.classList.contains('hidden')) {
    changeTabView();
  }
})

reqForm.addEventListener('submit', (e) => {
  e.preventDefault();
  postFormData();
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  loginCheck();
})