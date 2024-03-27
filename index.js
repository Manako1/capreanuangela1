// Helper function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Helper function to display the result
function displayResult(celsius, fahrenheit) {
    console.log(celsius + " degrees Celsius is equal to " + fahrenheit + " degrees Fahrenheit.");
}

// Main function to use the helper functions
function main() {
    // Temperature in Celsius
    var celsiusTemperature = 20;

    // Convert Celsius to Fahrenheit
    var fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);

    // Display the result
    displayResult(celsiusTemperature, fahrenheitTemperature);
}

// Call the main function to run the program
main();
