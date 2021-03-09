export function GetInfos(newCity, setMeteoInfos) {
    
    const url = 'http://localhost:8080/api/weather/' + newCity + '/';
        fetch(url, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        })
        .then(res => res.json())
        .then(res => {
          if (res.cod === 200) {
            var newWeather = {name: res.name, weather: res.weather[0].description, temp: res.main.temp, icon: res.weather[0].icon}
            setMeteoInfos(newWeather, true)
          }
          else {
            setMeteoInfos({}, false);
          }
    })
}