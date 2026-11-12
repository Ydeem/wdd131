// Footer dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Static weather values (must match the values shown on the page)
const temperature = 30; // °C
const windSpeed = 12;   // km/h

// Metric wind chill formula (°C, km/h) - one line of code
function calculateWindChill(temp, speed) {
  return (13.12 + 0.6215 * temp - 11.37 * speed ** 0.16 + 0.3965 * temp * speed ** 0.16).toFixed(1);
}

// Only calculate when wind chill is viable: temperature <= 10 °C and wind speed > 4.8 km/h
const windChillOutput = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
  windChillOutput.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
  windChillOutput.textContent = "N/A";
}
