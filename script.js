function getWeather() {
    let city = document.getElementById("cityInput").value;
    let result = document.getElementById("weatherResult");

    if (city === "") {
        result.innerHTML = "Please enter a city name.";
        return;
    }

    // This is a simple simulated weather (no API needed)
    let randomTemp = Math.floor(Math.random() * 15) + 20;
    let conditions = ["Sunny ☀️", "Cloudy ☁️", "Rainy 🌧️", "Stormy ⛈️"];
    let randomCondition = conditions[Math.floor(Math.random() * conditions.length)];

    result.innerHTML = `
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Temperature:</strong> ${randomTemp}°C</p>
        <p><strong>Condition:</strong> ${randomCondition}</p>
    `;
}