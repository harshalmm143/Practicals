// Retrieve command line arguments
const args = process.argv.slice(2);

// Check if there are enough arguments
if (args.length < 2) {
    console.log('Usage: node caseConverter.js <string> <case>');
    console.log('   <string>: The string to convert');
    console.log('   <case>: "upper" to convert to uppercase, "lower" to convert to lowercase');
    process.exit(1);
}

// Extract string and desired case from arguments
const inputString = args[0];
const desiredCase = args[1];

// Function to convert a string to uppercase
function toUpperCase(input) {
    return input.toUpperCase();
}

// Function to convert a string to lowercase
function toLowerCase(input) {
    return input.toLowerCase();
}

// Main function
function main() {
    let convertedString;

    // Perform the conversion based on user choice
    if (desiredCase.toLowerCase() === 'upper') {
        convertedString = toUpperCase(inputString);
    } else if (desiredCase.toLowerCase() === 'lower') {
        convertedString = toLowerCase(inputString);
    } else {
        console.log('Invalid choice. Please enter "upper" or "lower".');
        process.exit(1);
    }

    // Print the converted string
    console.log('Converted string:', convertedString);
}

// Call the main function to start the program
main();



// Run Command

// node caseConverter.js "Hello World" upper

// output
// Converted string: HELLO WORLD



// node caseConverter.js "Hello World" lower

// output
// Converted string: hello world