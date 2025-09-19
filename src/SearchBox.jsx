import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "195c17b021c0ffe130145231f2d22d61";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            // console.log(jsonResponse);

            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                feels_like: jsonResponse.main.feels_like,
                temp_min: jsonResponse.main.temp_min,
                temp_max: jsonResponse.main.temp_max,
                pressure: jsonResponse.main.pressure,
                humidity: jsonResponse.main.humidity,
                weather: jsonResponse.weather[0].main,
                description: jsonResponse.weather[0].description,
                icon: jsonResponse.weather[0].icon,
                wind_speed: jsonResponse.wind.speed,
                wind_deg: jsonResponse.wind.deg,
                country: jsonResponse.sys.country,
                sunrise: jsonResponse.sys.sunrise,
                sunset: jsonResponse.sys.sunset
            };
            console.log(result);
            return result;
        } catch (error) {
            throw error;
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch (error) {
            setError("No Such place in Our API");
        }
    };

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type="submit" size="medium"> Send </Button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    )
}