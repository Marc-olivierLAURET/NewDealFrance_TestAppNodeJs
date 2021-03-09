import React, { Component } from 'react';

import { MeteoContext } from '../Model/Context/MeteoContext'

class MeteoDisplayer extends Component {
    static contextType = MeteoContext;
    render() {
        const { isInit, meteoInfo } = this.context;
        if (isInit === true) {
            return (
              <div className="MeteoInfo">
                <p className="MeteoCity">{meteoInfo.name}</p>
                <p className="MeteoWeather">{meteoInfo.weather}</p>
                <p className="MeteoTemp">{meteoInfo.temp + "°C"}</p>
                <img src={"http://openweathermap.org/img/wn/" + meteoInfo.icon + "@4x.png"} alt={meteoInfo.weather} className="MeteoImg"/>
              </div>
            );
          }
          else {
            return (
              <div className="ServerError">
                <p>Impossible de récupérer les informations venant du serveur.</p>
                <p>Ce service est actuellement indisponible.</p>
              </div>
            );
        }
    }
}

export default MeteoDisplayer;