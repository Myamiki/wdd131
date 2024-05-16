const date = new Date();
let currentyear = date.getFullYear();
document.getElementById("currentyear").innerHTML = currentyear;

let lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = lastModified;

const displayList = (data, block) => {
    for (var i = 0; i<data.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = `<strong>${data[i][0]}:</strong> <span>${data[i][1]}</span>`;    
        if(li) {
            block.appendChild(li);
        }
    }
}

const calculateWindChill = () => {
    return '';
}



let dataSquareArea = ['Area','600,000 sq km'];
let dataPopulation = ['Population','40,000,000'];
let dataCapitale = ['Capitale','Pretoria'];
let dataLanguage = ['Languages','Tswana, Zulu'];
let dataCurrency = ['Currency','South African Rand'];
let dataTimezone = ['Time Zone','SAST'];
let dataCallingCode = ['Calling Code','+27'];
let dataInternetTld = ['Internet TLD','.za'];
let data = [dataSquareArea, dataPopulation, dataCapitale, dataLanguage, dataCurrency, dataTimezone,
            dataCallingCode, dataInternetTld];

let blockDataList = document.querySelector('#dataList');
displayList(data, blockDataList);   


let weatherTemperature = [ 'Temperature', '20°C'];
let weatherConditions = [ 'Conditions','Partly Cloudly' ];
let weatherWind = [ 'Wind','5km/h' ];
let weatherWindChill = [ 'Wind Chill','8.8°C' ];
let weatherData = [weatherTemperature, weatherConditions, weatherWind, weatherWindChill];

let blockWeatherList = document.getElementById('weatherList');
displayList(weatherData, blockWeatherList);

