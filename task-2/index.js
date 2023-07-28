const cities = ["Томск", "Санкт-Петербург", "Торонто", "Лиссабон"];

let cityTemperatures = [];
for (let city of cities) {
    const temperature = prompt(`Введите температуру для города ${city}`);
    cityTemperatures.push(Number(temperature));
}

const citiesWithTemperatures = [];

for (let i = 0; i < cities.length; i++) {
    const cityObject = {};
    cityObject.city = cities[i];
    cityObject.temperature = cityTemperatures[i];
    citiesWithTemperatures.push(cityObject);
}

const cityTemperaturesCopy = [...cityTemperatures];
cityTemperaturesCopy.sort((a, b) => a - b);
const maxTemperature = cityTemperaturesCopy[cityTemperaturesCopy.length - 1];
const minTemperature = cityTemperaturesCopy[0];

const cityInfoContainer = document.querySelector(".city-temperatures");
for (let city of citiesWithTemperatures) {
    const cityInfo = document.createElement("p");
    cityInfo.textContent = `Температура в г. ${city.city}: ${city.temperature}°C`;
    cityInfoContainer.append(cityInfo);
}

const maxTempInfo = document.createElement("h2");
maxTempInfo.textContent = `Максимальная температура: ${maxTemperature}°C`;
cityInfoContainer.after(maxTempInfo);

const minTempInfo = document.createElement("h2");
minTempInfo.textContent = `Минимальная температура: ${minTemperature}°C`;
maxTempInfo.after(minTempInfo);