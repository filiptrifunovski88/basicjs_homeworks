const fetchPeople = async () => {
  const response = await fetch("https://swapi.py4e.com/api/people/");
  return response.json();
};

const fetchPlanets = async () => {
  const response = await fetch("https://swapi.py4e.com/api/planets");
  return response.json();
};

const fetchFilms = async () => {
  const response = await fetch("https://swapi.py4e.com/api/films/");
  return response.json();
};

const fetchSpecies = async () => {
  const response = await fetch("https://swapi.py4e.com/api/species/");
  return response.json();
};

const fetchVehicles = async () => {
  const response = await fetch("https://swapi.py4e.com/api/vehicles/");
  return response.json();
};

const fetchStarships = async () => {
  const response = await fetch("https://swapi.py4e.com/api/starships/");
  return response.json();
};

const peopleNames = async () => {
  const people = await fetchPeople();
  return people.results.map((person) => {
    console.log(person.name);
    return person.name;
  });
};

const peopleHeight = async () => {
  const people = await fetchPeople();
  return people.results.map((person) => {
    console.log(person.height);
    return person.height;
  });
};

const peopeHairColor = async () => {
  const people = await fetchPeople();
  return people.results.map((person) => {
    console.log(person.hair_color);
    return person.hair_color;
  });
};
const peopeBirthYear = async () => {
  const people = await fetchPeople();
  return people.results.map((person) => {
    console.log(person.birth_year);
    return person.birth_year;
  });
};

document.getElementById("circle1").addEventListener("click", async () => {
  const firstP = document.getElementById("printFirstP");
  try {
    const names = await peopleNames();
    firstP.innerHTML += names.join("<br>");
    firstP.style.color = `white`;
    firstP.style.display = `block`;
  } catch (error) {
    console.error("Error:", error);
  }
  const secondP = document.getElementById("printSecondP");
  try {
    const height = await peopleHeight();
    secondP.innerHTML += height.join("<br>");
    secondP.style.color = `white`;
    secondP.style.display = `block`;
  } catch (error) {
    console.error("Error:", error);
  }
  const thirdP = document.getElementById("printThirdP");
  try {
    const hairColor = await peopeHairColor();
    thirdP.innerHTML += hairColor.join("<br>");
    thirdP.style.color = `white`;
    thirdP.style.display = `block`;
  } catch (error) {
    console.error("Error:", error);
  }
  const fourthP = document.getElementById("printFourthP");
  try {
    const birthYear = await peopeBirthYear();
    fourthP.innerHTML += birthYear.join("<br>");
    fourthP.style.color = `white`;
    fourthP.style.display = `block`;
  } catch (error) {
    console.error("Error:", error);
  }
});
(async () => {
  console.log("People:", await fetchPeople());
  console.log("Planets:", await fetchPlanets());
  console.log("Films:", await fetchFilms());
  console.log("Species:", await fetchSpecies());
  console.log("Vehicles:", await fetchVehicles());
  console.log("Starships:", await fetchStarships());
})();
