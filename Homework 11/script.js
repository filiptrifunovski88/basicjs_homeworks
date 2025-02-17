async function getData() {
  const response = await fetch(`https://dummyjson.com/products`);
  const data = await response.json();
  console.log(data);
  return data;
}

async function beauty() {
  const allData = await getData();
  const beauty = allData.products.filter((data) => data.category === `beauty`);
  console.log(beauty);
  const sortBeauty = beauty.sort((a, b) => a.price - b.price);

  return sortBeauty
    .map((ins) => {
      return `
  <div id="editDiv">
  <p><strong>Title: </strong>${ins.title}</p>
  <p><strong>Description: </strong>${ins.description}</p>
  <p><strong>Category: </strong>${ins.category}</p>
  <p><strong>Price: </strong>${ins.price}</p>
  </div>
    `;
    })
    .join("");
}

async function stock50plus() {
  const allData = await getData();
  const stock50plus = allData.products.filter((data) => data.stock >= 50);
  console.log(stock50plus);

  return stock50plus
    .map((ins) => {
      return `
  <div id="editDiv2">
  <p><strong>Title: </strong>${ins.title}</p>
  <p><strong>Description: </strong>${ins.description}</p>
  <p><strong>Category: </strong>${ins.category}</p>
  <p><strong>Stock: </strong>${ins.stock}</p>
  </div>
  `;
    })
    .join("");
}

async function lifetimeWarranty() {
  const allData = await getData();
  const sortedData = allData.products.filter(
    (data) =>
      data.reviews[0].rating === 5 &&
      data.warrantyInformation === `Lifetime warranty`
  );

  console.log(sortedData);
  return sortedData
    .map((ins) => {
      return `
  <div id="editDiv3">
  <p><strong>Title: </strong>${ins.title}</p>
  <p><strong>Description: </strong>${ins.description}</p>
  <p><strong>Category: </strong>${ins.category}</p>
  <p><strong>Rating: </strong>${ins.reviews[0].rating}</p>
  <p><strong>Warranty Information: </strong>${ins.warrantyInformation}</p>
  </div>
  `;
    })
    .join("");
}

async function ratingFurniture() {
  const allData = await getData();
  const furniture = allData.products.filter(
    (product) => product.category === "furniture"
  );
  const ratings = furniture.map((product) => product.rating);
  const averageRating =
    ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length;
  console.log(averageRating);
  return furniture
    .map((ins) => {
      return `
  <div id="editDiv3">
  <p><strong>Title: </strong>${ins.title}</p>
  <p><strong>Description: </strong>${ins.description}</p>
  <p><strong>Category: </strong>${ins.category}</p>
  <h3><strong>Average Rating is: </strong>${averageRating}</h3>
  </div>
  `;
    })
    .join("");
}

async function highestRatedBeautyProduct() {
  const allData = await getData();

  const beautyProducts = allData.products.filter(
    (product) => product.category === "beauty"
  );

  const highestRated = beautyProducts.reduce(
    (best, product) => (product.rating > best.rating ? product : best),
    beautyProducts[0]
  );
  console.log(highestRated);
  return `
  <div id="editDiv5">
  <p>The name of the highest rated beauty product is <strong>${highestRated.title}</strong></p>
  </div>
`;
}

async function mostExpensiveProduct() {
  const allData = await getData();
  const mostExpensiveProduct = allData.products.reduce((acc, product) =>
    product.price > acc.price ? product : acc
  );
  console.log(mostExpensiveProduct);
  return `
  <div id="editDiv5">
  <p>The highest price of all products is <strong>${mostExpensiveProduct.price}</strong></p>
  </div>
`;
}

async function averageRatingOfProduct22() {
  const allData = await getData();
  const product = allData.products.find((product) => product.id === 22);

  const averageRating =
    product.reviews.reduce((acc, review) => acc + review.rating, 0) /
    product.reviews.length;
  console.log(averageRating);

  return `
    <div id="editDiv5">
      <p>Average Rating for Product ID 22: <strong>${averageRating}</strong></p>
    </div>
  `;
}

async function discountAbove10() {
  const allData = await getData();
  const discountedProducts = allData.products.filter(
    (product) => product.discountPercentage > 10
  );

  console.log(discountedProducts);

  return discountedProducts
    .map((ins) => {
      return `
        <div id="editDiv5">
          <p><strong>Title: </strong>${ins.title}</p>
          <p><strong>Description: </strong>${ins.description}</p>
          <p><strong>Discount: </strong>${ins.discountPercentage}%</p>
        </div>
      `;
    })
    .join("");
}

addEventListener(`DOMContentLoaded`, async function () {
  const beautyProducts = await beauty();
  const stock50pluss = await stock50plus();
  const lifetimeWarrantyy = await lifetimeWarranty();
  const ratingFurnituree = await ratingFurniture();
  const highestRatedBeautyProductt = await highestRatedBeautyProduct();
  const mostExpensiveProductt = await mostExpensiveProduct();
  const averageRatingOfProduct222 = await averageRatingOfProduct22();
  const discountAbove10W = await discountAbove10();
  document.getElementById(`div1`).innerHTML = beautyProducts;
  document.getElementById(`div2`).innerHTML = stock50pluss;
  document.getElementById(`div3`).innerHTML = lifetimeWarrantyy;
  document.getElementById(`div4`).innerHTML = ratingFurnituree;
  document.getElementById(`div5`).innerHTML = highestRatedBeautyProductt;
  document.getElementById(`div5`).innerHTML += mostExpensiveProductt;
  document.getElementById(`div5`).innerHTML += averageRatingOfProduct222;
  document.getElementById(`div5`).innerHTML += discountAbove10W;
});
