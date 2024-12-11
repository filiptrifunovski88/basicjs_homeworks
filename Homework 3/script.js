function typeOfFunction(input) {
  let type = typeof input;
  console.log(`The type of the input is: ${type}`);
  return type;
}
typeOfFunction(19);
typeOfFunction("Hello");
typeOfFunction(true);
typeOfFunction(undefined);
typeOfFunction({ name: "Filip" });
