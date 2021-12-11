





const customerData = [];


d3.csv("./test_data/transaction_data_2.csv", function (d) {
    return {
        customer_id: d["Customer ID"],
        transaction_amount: +d["Transaction Amount"],
        transaction_date: d["Transaction Date"]
    };
}).then(function (data) {
    return data;
});

// Read data from the CSV file
d3.csv("./test_data/transaction_data_1.csv", function (d) {
    return {
        customer_id: d["Customer ID"],
        transaction_amount: +d["Transaction Amount"],
        transaction_date: d["Transaction Date"]
    };
}).then(function (data) {
    customerData.push(data);
});
console.log(customerData);

// sort the array according to customer IDs
let newArray = [];
newArray.push(customerData);
// console.log(newArray);
// newArray.forEach((data) => {
//     data.forEach((newData) => {
//         console.log(newData);
//     })
// });

for (let i = 0; i < customerData.length; i++) {
   for (let k = 0; k < customerData[i].length; k++) {
       console.log(customerData[i][k]);  
   }
}

// Sorting the Array by date
let arr = [];
arr.push(newArray);
const sortByDate = arr => {
    const sorter = (a, b) => {
        return new Date(a.transaction_date).getTime() - new Date(b.transaction_date).getTime();
    }
    arr.sort(sorter);
};
sortByDate(arr);
console.log(arr);


// Finding concercative dates
//First, we map them to date objects, and sort the new list.
const addDays = require('date-fns/addDays')
const parse = require('date-fns/parseISO')
const sorted = customerData.map(d => parse(d)).sort((a, b) => a - b)

//Then we reduce over the entire list, checking pairwise for the dates to be consecutive
const pairs = sorted.reduce((pairs, start, i, customerData) => {
    const end = customerData[i + 1]
    if (addDays(start, 1) - end === 0) pairs.push({ start, end })
    return pairs
}, []);


// Function that takes in the data from the csv file( the array ) and a counter value that counts dictates the length of the array according to the user with the most consercutive days
function awardCredit(arr, n){
    let n = arr.length;

}








