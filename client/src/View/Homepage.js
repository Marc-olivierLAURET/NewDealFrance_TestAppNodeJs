import React, { Component } from 'react';

import MeteoDisplayer from './MeteoDisplayer'
import SettingsDisplayer from './SettingsDisplayer'

class HomePage extends Component {
  render() {
    return (
      <div className= "HomePage">
        <SettingsDisplayer/>
        <MeteoDisplayer/>
      </div>
    );
  }
}

export default HomePage;