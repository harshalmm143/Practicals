
const queryString = "key1=value1&key2=value2&key3=value3&key4=value4&key5=value5";

// Creating a URLSearchParams object with the query string
const params = new URLSearchParams(queryString);

// Iterating over each parameter
console.log("---Readable parts---")
params.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});



// Program run command

// node queryString.js