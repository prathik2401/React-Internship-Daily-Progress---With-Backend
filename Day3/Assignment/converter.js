// Converts Fahrenheit into Celcius
function convertFahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}
    
// Converts Celcius into Fahrenheit
function convertCelsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

function convertTemperature() {
    const celsius = document.getElementById('celsius').value;
    const fahrenheitConv = convertCelsiusToFahrenheit(celsius);
    document.getElementById('fahrenheit').textContent = `Fahrenheit: ${fahrenheitConv}`;
    
    const fahrenheit = document.getElementById('fahrenheit').value;
    const celciusConv = convertFahrenheitToCelsius(fahrenheit);
    document.getElementById('celclius').textContent = `Celcius: ${celciusConv}`;
}