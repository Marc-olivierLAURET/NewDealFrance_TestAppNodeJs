import './App.css';

import Homepage from './View/Homepage'
import MeteoContextProvider from './Model/Context/MeteoContext'

function App() {
  return (
    <div className="App">
      <MeteoContextProvider>
        <Homepage/>
      </MeteoContextProvider>
    </div>
  );
}

export default App;
