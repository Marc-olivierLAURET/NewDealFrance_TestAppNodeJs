const fetch = require('node-fetch');

exports.getWeather = function (request, response) {
    const city = request.params.city;

    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city
            + '&lang=fr&units=metric&appid=' + process.env.WEATHER_API_CLIENT_KEY;

    fetch(url)
        .then(res => res.json())
        .then((res) => {
            if (res.cod == '404')
                response.status(404).json(res);
            else
                response.status(200).json(res);
        });
}