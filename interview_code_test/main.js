// program with a method/function that takes two arguments, transactions_csv_file_path and n.
// Your method should return the customer IDs of the best n customers from the transaction data.
// The ID's should be returned in the following format ['ID 1', 'ID 2', 'ID 3'].
// We define the best customer as the one with the longest period of consecutive daily payments.

// Solution rules:
// 1. We define consecutive daily payments as at least 1 transaction per calendar day.
// 2. If there are any ties, use ascending order to break ties. For example K20003 comes before K20005.

// Testing your solution:
// To help you validate your solution, use the following test cases:

// Input:
//   - transactions_csv_file_path: 'transaction_data_1.csv'
//   - n: 1
// Expected output:
//   - ['K20008']

// Input:
//   - transactions_csv_file_path: 'transaction_data_2.csv'
//   - n: 3
// Expected output:
//   - ['K20987', 'K20008', 'K20233']

// Input:
//   - transactions_csv_file_path: 'transaction_data_3.csv'
//   - n: 5
// Expected output:
//   - [ 'K20002', 'K20005', 'K20377', 'K20987', 'K22584']

// Getting the file and reading to text

const myForm = document.getElementById("myForm");
const csvFile = document.getElementById("csvFile");
const csvData = [];

myForm.addEventListener("submit", function (e) {
  // Preventing browsers default behavior of refreshing
  e.preventDefault();
  const input = csvFile.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const text = e.target.result;
    const data = csvToArray(text);
    let stringifiedData = JSON.stringify(data);
    csvData.push(stringifiedData);
    console.log(stringifiedData);
  };

  reader.readAsText(input);
});

//Sort the Array using da
const groupBy = (key, arr) =>
  arr.reduce(
    (cache, val) => ({
      ...cache,
      [stringifiedData[key]]:
        stringifiedData[key] in cache
          ? cache[stringifiedData[key]].concat(stringifiedData)
          : [stringifiedData],
    }),
    {}
  );
  console.log(groupBy("customer_id", stringifiedData));

console.log(csvData);
// Converting the string into an array
function csvToArray(str, delimiter = ",") {
  // slice from start of text to the first \n index
  // use split to create an array from string by delimiter
  const headers = str.slice(0, str.indexOf("\n")).split(delimiter);

  // slice from \n index + 1 to the end of the text
  // use split to create an array of each csv value row
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");

  // Map the rows
  // split values from each row into an array
  // use headers.reduce to create an object
  // object properties derived from headers:values
  // the object passed as an element of the array
  const arr = rows.map(function (row) {
    const values = row.split(delimiter);
    const el = headers.reduce(function (object, header, index) {
      object[header] = values[index];
      return object;
    }, {});
    return el;
  });

  // return the array
  return arr;
}
