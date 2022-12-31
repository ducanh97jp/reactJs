function getAPI(cityName){
    return new Promise(function(resolve){
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},VN&limit=1&appid=82739899029d32464cb7c5dcf43c46ae`)
        .then(function(json){
            resolve(json.data[0]);
    })
})

}


function getAPIWeather(lat,lon){
    return new Promise(function(resolve){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=82739899029d32464cb7c5dcf43c46ae`)
        .then(function(json){
            resolve(json.data);
    })
})

}


getAPI("Paris").then(result => {
    let cityLat = result.lat
    let cityLon = result.lon

getAPIWeather(cityLat,cityLon).then(result => {
    let Loctemp = ((result.main.temp) - 273.15).toFixed(2);
    document.getElementById('test').innerHTML = `
    City name: ${result.name}
    <br/>
    Temperature: ${Loctemp}℃
    <br/>
    Atmospheric pressure: ${result.main.pressure} on sea level
    <br/>
    Humidity: ${result.main.humidity}%
    <br/>
    Cloudiness: ${result.clouds.all}%
    <br/>
    Visibility: ${result.visibility}m
    `
});

});



getAPI("Ho Chi Minh").then(result => {
    let cityLat = result.lat
    let cityLon = result.lon

getAPIWeather(cityLat,cityLon).then(result => {
    let Loctemp = ((result.main.temp) - 273.15).toFixed(2);
    document.getElementById('test2').innerHTML = `
    City name: ${result.name}
    <br/>
    Temperature: ${Loctemp}℃
    <br/>
    Atmospheric pressure: ${result.main.pressure} on sea level
    <br/>
    Humidity: ${result.main.humidity}%
    <br/>
    Cloudiness: ${result.clouds.all}%
    <br/>
    Visibility: ${result.visibility}m
    `
});

});


getAPIWeather("40.7143","-74.006").then(result => {
    let Loctemp = ((result.main.temp) - 273.15).toFixed(2);
    document.getElementById('test3').innerHTML = `
    City name: ${result.name}
    <br/>
    Temperature: ${Loctemp}℃
    <br/>
    Atmospheric pressure: ${result.main.pressure} on sea level
    <br/>
    Humidity: ${result.main.humidity}%
    <br/>
    Cloudiness: ${result.clouds.all}%
    <br/>
    Visibility: ${result.visibility}m
    `
});

getAPIWeather("48.8534","2.3488").then(result => {
    let Loctemp = ((result.main.temp) - 273.15).toFixed(2);
    document.getElementById('test4').innerHTML = `
    City name: ${result.name}
    <br/>
    Temperature: ${Loctemp}℃
    <br/>
    Atmospheric pressure: ${result.main.pressure} on sea level
    <br/>
    Humidity: ${result.main.humidity}%
    <br/>
    Cloudiness: ${result.clouds.all}%
    <br/>
    Visibility: ${result.visibility}m
    `
});
