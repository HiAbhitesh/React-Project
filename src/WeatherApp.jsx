import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        country: "IN",
        description: "scattered clouds",
        feels_like: 37.93,
        humidity: 55,
        icon: "03d",
        pressure: 1008,
        sunrise: 1757723707,
        sunset: 1757768365,
        temp: 33.05,
        temp_max: 33.05,
        temp_min: 33.05,
        weather: "Clouds",
        wind_deg: 290,
        wind_speed: 2.57,
    });
    
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{ textAlign: "center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}