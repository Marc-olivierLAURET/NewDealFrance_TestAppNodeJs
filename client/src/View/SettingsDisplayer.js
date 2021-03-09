import React, { Component } from 'react';

import { MeteoContext } from '../Model/Context/MeteoContext'
import { GetInfos } from '../Model/GetInfos'

class SettingsDisplayer extends Component {
  static contextType = MeteoContext;

  componentDidMount() {
    this.getInfo('Paris');
  }

  getInfo = (newCity) => {
    const { setMeteoInfos } = this.context;
    GetInfos(newCity, setMeteoInfos);
  }

  render() {
    return (
      <div className="settings">
        <p className= "Choosecity">Choisissez une ville</p>
        <select className='select'>
          <option value='Paris' onClick={() => this.getInfo('Paris')}>Paris</option>
          <option value='Nantes' onClick={() => this.getInfo('Nantes')}>Nantes</option>
          <option value='Bordeaux' onClick={() => this.getInfo('Bordeaux')}>Bordeaux</option>
          <option value='Marseille' onClick={() => this.getInfo('Marseille')}>Marseille</option>
          <option value='Strasbourg' onClick={() => this.getInfo('Strasbourg')}>Strasbourg</option>
         <option value='Rennes' onClick={() => this.getInfo('Rennes')}>Rennes</option>
        </select>
        <div className="select_arrow">
        </div>
      </div>
    )
  }
}

export default SettingsDisplayer;