function maxMin(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  console.log(`Max=${max}, Min=${min}, Sum=${sum}`);
}
let array = [5, 10, 15, 20, 25];
maxMin(array);
