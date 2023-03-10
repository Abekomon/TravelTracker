const destinationData = [
  {
  id: 1,
  destination: "Lima, Peru",
  estimatedLodgingCostPerDay: 70,
  estimatedFlightCostPerPerson: 400,
  image: "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
  alt: "overview of city buildings with a clear sky"
  },
  {
  id: 2,
  destination: "Stockholm, Sweden",
  estimatedLodgingCostPerDay: 100,
  estimatedFlightCostPerPerson: 780,
  image: "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  alt: "city with boats on the water during the day time"
  },
  {
  id: 3,
  destination: "Sydney, Austrailia",
  estimatedLodgingCostPerDay: 130,
  estimatedFlightCostPerPerson: 950,
  image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  alt: "opera house and city buildings on the water with boats"
  },
  {
  id: 4,
  destination: "Cartagena, Colombia",
  estimatedLodgingCostPerDay: 65,
  estimatedFlightCostPerPerson: 350,
  image: "https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  alt: "boats at a dock during the day time"
  },
  {
  id: 5,
  destination: "Madrid, Spain",
  estimatedLodgingCostPerDay: 150,
  estimatedFlightCostPerPerson: 650,
  image: "https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  alt: "city with clear skys and a road in the day time"
  },
]

const tripData = [
  {
  id: 1,
  userID: 1,
  destinationID: 2,
  travelers: 1,
  date: "2020/05/16",
  duration: 8,
  status: "approved",
  suggestedActivities: [ ]
  },
  {
  id: 2,
  userID: 10,
  destinationID: 25,
  travelers: 5,
  date: "2022/10/04",
  duration: 18,
  status: "approved",
  suggestedActivities: [ ]
  },
  {
  id: 3,
  userID: 3,
  destinationID: 22,
  travelers: 4,
  date: "2022/05/22",
  duration: 17,
  status: "approved",
  suggestedActivities: [ ]
  },
  {
  id: 4,
  userID: 43,
  destinationID: 14,
  travelers: 2,
  date: "2022/02/25",
  duration: 10,
  status: "approved",
  suggestedActivities: [ ]
  },
  {
  id: 5,
  userID: 42,
  destinationID: 29,
  travelers: 3,
  date: "2022/04/30",
  duration: 18,
  status: "approved",
  suggestedActivities: [ ]
  },
  {
  id: 6,
  userID: 29,
  destinationID: 35,
  travelers: 3,
  date: "2022/06/29",
  duration: 9,
  status: "approved",
  suggestedActivities: [ ]
  },
  {
  id: 7,
  userID: 37,
  destinationID: 17,
  travelers: 5,
  date: "2022/5/28",
  duration: 20,
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
  id: 9,
  userID: 24,
  destinationID: 19,
  travelers: 5,
  date: "2022/12/19",
  duration: 19,
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
]

const travelerData = {
  id: 1,
  name: "Ham Leadbeater",
  travelerType: "relaxer"
}

export { destinationData, tripData, travelerData }