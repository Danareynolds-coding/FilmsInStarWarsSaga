
let filmUrl = 'https://swapi.dev/api/films/1/'
let film = document.getElementById('film')
fetch(filmUrl).then(response => response.json()).then(json => {
  console.log(json)
  film.innerHTML =`<h3>${json.title}   Episode: ${json.episode_id} </h3><p>${json.director}</p> <p> ${json.opening_crawl}`
  
})

let peopleUrl = 'https://swapi.dev/api/people/1/'
let people = document.getElementById('people')
fetch(peopleUrl).then(response => response.json()).then(json => {
  console.log(json)
  people.innerHTML =`<h3>${json.name} </h3><p>Birth Year ${json.birth_year},  Gender:${json.gender} 
  ${json.homeworld}:${json.species}</p>FILMS:${json.films}<p>
  `
})

let planetsUrl = 'https://swapi.dev/api/planets/1/'
let planets = document.getElementById('planets')
fetch(planetsUrl).then(response => response.json()).then(json => {
  console.log(json)
  planets.innerHTML =`<h3>${json.name} </h3><p>population : ${json.population}, climate:${json.climate} ${json.terrain}</p><p>Days:${json.orbital_period}-   Hours per day ${json.rotation_period}</p>Residents:${json.residents}</p>
  `
})

let speciesUrl = 'https://swapi.dev/api/species/1/'
let species = document.getElementById('species')
fetch(speciesUrl).then(response => response.json()).then(json => {
  console.log(json)
  species.innerHTML =`<h3>${json.name} </h3><p>classification : ${json.classification}, 
     designation:${json.designation}</p>
  `
})

let starshipsUrl = 'https://swapi.dev/api/starships/1/'
let starships = document.getElementById('starships')
fetch(starshipsUrl).then(response => response.json()).then(json => {
  console.log(json)
  starships.innerHTML =`<h3>${json.name}  Model:${json.model}</h3>
  </p Pilots: ${json.pilots}  Crew:${json.crew}   ${json.max_atmosphering_speed}</p>
   
  `
})

let vehiclesUrl = 'https://swapi.dev/api/vehicles/1/'
let vehicles = document.getElementById('vehicles')
fetch(vehiclesUrl).then(response => response.json()).then(json => {
  console.log(json)
  vehicles.innerHTML =`<h3>${json.name}  Model:${json.model}</h3>
  <p>Pilots: ${json.pilots}    Crew:${json.crew}  Vehicle Class: ${json.vehicle_class}  Speed:${json.max_atmosphering_speed}</p>
  `
})
