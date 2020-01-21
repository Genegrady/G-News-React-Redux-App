import React from 'react'
import Clock from 'react-live-clock';

export const Weather = (props) => {
    console.log(props)
    const {name, detailedForecast} = props.weather
    return (
        <div>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Eastern'} className='clock'/>
            <img className="weatherimg" src ={`https://developer.apple.com/design/human-interface-guidelines/watchos/images/icon-and-image-large-icon-weather_2x.png`}/>
            <h1>
                {name}
            </h1>
            <p>
                {detailedForecast}
            </p>

        </div>
    )
}

export default Weather