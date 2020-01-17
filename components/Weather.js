import React from 'react'

export const Weather = (props) => {
    console.log(props)
    const {name, detailedForecast} = props.weather
    return (
        <div>
            
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