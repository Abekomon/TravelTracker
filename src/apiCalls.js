function fetchData(dataset) {
  return fetch(`http://localhost:3001/api/v1/${dataset}`).then(response => response.json());
}

export default function apiCalls() {
  const fetchTrips = fetchData('trips')
  const fetchDestinations = fetchData('destinations')

  return Promise.all([fetchTrips, fetchDestinations])
}