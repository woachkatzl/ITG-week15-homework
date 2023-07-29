//Создаём массив городов
const cities = ["Томск", "Санкт-Петербург", "Торонто", "Лиссабон"];

//Создаём пустой массив для значений температуры в этих  городах. С помощью цикла заполняем его значениями температуры для каждого города
let cityTemperatures = [];
for (let city of cities) {
    const temperature = prompt(`Введите температуру для города ${city}`);
    cityTemperatures.push(Number(temperature));
}

// Создаём массив для объектов, которые будут содержать информацию о каждом городе
const citiesWithTemperatures = [];

// С помощью цикла заполняем его объектами. На каждом этапе: 
//создаём пустой объект cityObject, 
//присваиваем ключу city объекта cityObject значение текущего элемента массива cities,
//присваиваем ключу temperature объекта cityObject значение текущего элемента массива cityTemperatures,
//вставляем созданный объект в конец массива citiesWithTemperatures
for (let i = 0; i < cities.length; i++) {
    const cityObject = {};
    cityObject.city = cities[i];
    cityObject.temperature = cityTemperatures[i];
    citiesWithTemperatures.push(cityObject);
}

//Создаём копию массива cityTemperatures, чтобы отсортировать значения температур по возрастанию и определить максимальну и минимальную температуры (последняя и первая в получившемся массиве)
const cityTemperaturesCopy = [...cityTemperatures];
cityTemperaturesCopy.sort((a, b) => a - b);
const maxTemperature = cityTemperaturesCopy[cityTemperaturesCopy.length - 1];
const minTemperature = cityTemperaturesCopy[0];

//С помощью цикла создаём DOM-элемент для каждого объекта массива citiesWithTemperatures, присваиваем ему текстовое ннаполнение на основе информации текущего объекта массива, и добавляем в блок контейнер на странице.
const cityInfoContainer = document.querySelector(".city-temperatures");
for (let city of citiesWithTemperatures) {
    const cityInfo = document.createElement("p");
    cityInfo.textContent = `Температура в г. ${city.city}: ${city.temperature}°C`;
    cityInfoContainer.append(cityInfo);
}

//Создаём DOM-элементы для максимальной и минимальной температур, добавляем их на страницу
const maxTempInfo = document.createElement("h2");
maxTempInfo.textContent = `Максимальная температура: ${maxTemperature}°C`;
cityInfoContainer.after(maxTempInfo);

const minTempInfo = document.createElement("h2");
minTempInfo.textContent = `Минимальная температура: ${minTemperature}°C`;
maxTempInfo.after(minTempInfo);