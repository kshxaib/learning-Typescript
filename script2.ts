// Union and Intersection Types

//Union -- dono me se koi ek type
let x: string | number;
x = 23
x = "shoaib"
// variable = true  Invalid

//Intersection -- dono hi type aynge
// making our own type
type City = {
    name: string,
    population: number
}

type Planet = {
    name: string,
    cities: number
}

type CitiesInPlanet = City & Planet
let y: CitiesInPlanet = {
    name: "asjd",
    cities: 122,
    population: 12
}