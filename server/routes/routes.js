module.exports = function(app) {
    const about = require('./API/about');
    const weather = require('./API/Weather/weather')

    app.route('/API/weather/:city')
        .get(weather.getWeather)

    app.route('/about.json')
        .get(about.getAbout);
}