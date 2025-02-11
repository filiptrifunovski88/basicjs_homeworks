async function getData() {
  const response = await fetch(
    `https://raw.githubusercontent.com/filiptrifunovski88/cars.json/refs/heads/main/cars.json`
  );
  const data = await response.json();
  console.log(data);
  return data;
}

function createTable(cars) {
  return `
    <table border="1">
      <thead>
        <tr>
          <th>Type</th>
          <th>Brand</th>
          <th>Model</th>
          <th>Gas Type</th>
          <th>Color</th>
          <th>Is New</th>
          <th>Horsepower</th>
        </tr>
      </thead>
      <tbody>
        ${cars
          .map(
            (car) => `
          <tr>
            <td>${car.type}</td>
            <td>${car.brand}</td>
            <td>${car.model}</td>
            <td>${car.gasType}</td>
            <td>${car.color}</td>
            <td>${car.isNew}</td>
            <td>${car.horsepower}</td>
          </tr>`
          )
          .join("")}
      </tbody>
    </table>
  `;
}

document.getElementById(`basic`).addEventListener(`click`, async function () {
  const allCars = await getData();
  const editDiv = document.getElementById(`editDiv`);
  editDiv.innerHTML = await createTable(allCars);
});

document.getElementById(`medium`).addEventListener(`click`, async function () {
  const editDiv = document.getElementById(`editDiv`);
  editDiv.innerHTML = `
  <h2>Medium</h2>
    <input type="search" id="inputsearch" placeholder="Search" />
    <button id="submitbutton">Submit</button>
  `;

  document
    .getElementById(`submitbutton`)
    .addEventListener(`click`, async function () {
      const allCars = await getData();
      const inputsearch = document
        .getElementById(`inputsearch`)
        .value.toLowerCase();
      const foundCars = allCars.filter(
        (car) =>
          car.type.toLowerCase() === inputsearch ||
          car.brand.toLowerCase() === inputsearch
      );
      console.log(foundCars);

      if (foundCars.length === 0) {
        editDiv.innerHTML = `<p>No cars found.</p>`;
        return;
      }
      editDiv.innerHTML = createTable(foundCars);
    });
});

document
  .getElementById(`advanced`)
  .addEventListener(`click`, async function () {
    const editDiv = document.getElementById(`editDiv`);
    editDiv.innerHTML = `
    <h2>Advanced</h2>
      <input type="search" id="inputsearch" placeholder="Search" />
      <button id="submitbutton">Submit</button>
    `;

    document
      .getElementById("submitbutton")
      .addEventListener("click", async function () {
        const inputsearch = document
          .getElementById("inputsearch")
          .value.toLowerCase();

        const allCars = await getData();

        const searchCar = inputsearch.split(" ");

        const filteredCars = allCars.filter((car) => {
          return searchCar.every((term) => {
            return (
              car.brand.toLowerCase() === term ||
              car.color.toLowerCase() === term ||
              car.type.toLowerCase() === term ||
              car.model.toLowerCase() === term ||
              car.gasType.toLowerCase() === term ||
              String(car.horsepower).toLowerCase() === term ||
              String(Boolean(car.isNew)).toLowerCase() === term
            );
          });
        });

        if (filteredCars.length === 0) {
          editDiv.innerHTML = `<p>No cars found.</p>`;
          return;
        }

        editDiv.innerHTML = createTable(filteredCars);
      });
  });
