import React, { Component, createContext } from 'react'

export const MeteoContext = createContext();

class MeteoContextProvider extends Component {
    state = {
        meteoInfo: {},
        isInit: false
    }

    setMeteoInfos = (newInfo, status) => {
        this.setState({meteoInfo: newInfo, isInit: status})
    }

    render() {
        return(
            <MeteoContext.Provider value={{...this.state, setMeteoInfos:this.setMeteoInfos}}>
                {this.props.children}
            </MeteoContext.Provider>
        );
    }
}
export default MeteoContextProvider;