import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
    const Init_Url = "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let Hot_Url = "https://plus.unsplash.com/premium_photo-1667076649924-d784d205cbba?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let Cold_url = "https://images.unsplash.com/photo-1616951849649-74dd2dd7e662?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let Rain_Url = "https://images.unsplash.com/photo-1688488615397-726ae4a5c755?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia sx={{ height: 140 }} image={info.humidity >= 80 ? Rain_Url : info.temp > 25 ? Hot_Url : Cold_url} title="green iguana"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {/* {info.city} */}
                            <strong>{info.city}, {info.country}</strong> 
                            <span style={{ marginLeft: "8px" }}>
                            {info.humidity >= 80 ? <ThunderstormIcon /> : info.temp > 25 ? <SunnyIcon /> : <AcUnitIcon />}
                            </span>
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            {/* <p><strong>{info.city}, {info.country}</strong> <br /></p> */}
                            <p>🌤️ {info.weather} - {info.description} <br /></p>
                            <p>🌡️ Temperature: {info.temp}°C (Feels Like: {info.feels_like}°C) <br /></p>
                            <p>🔼 Max: {info.temp_max}°C | 🔽 Min: {info.temp_min}°C <br /></p>
                            <p>💧 Humidity: {info.humidity}% | ⏲️ Pressure: {info.pressure} hPa <br /></p>
                            <p>🌬️ Wind: {info.wind_speed} m/s, {info.wind_deg}° <br /></p>
                            <p>🌅 Sunrise: {new Date(info.sunrise * 1000).toLocaleTimeString()} <br /></p>
                            <p>🌇 Sunset: {new Date(info.sunset * 1000).toLocaleTimeString()}</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}