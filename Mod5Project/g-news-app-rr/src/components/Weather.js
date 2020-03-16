import React from 'react'
import Clock from 'react-live-clock';

export const Weather = (props) => {
    console.log(props)
    const {name, detailedForecast} = props.weather
    return (
        <div>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Eastern'} className='clock'/>
            <img className="weatherimg" src ={`https://i.ya-webdesign.com/images/yahoo-weather-icons-png.png`}/>
            <h1 className="weather-name">
                {name}
            </h1>
            <p className="forecast">
                {detailedForecast}
            </p>

        </div>
    )
}

export default Weather