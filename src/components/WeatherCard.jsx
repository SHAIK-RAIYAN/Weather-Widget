import { Card, CardContent, Typography, Box, Divider } from "@mui/material";
import "./WeatherCard.css";

export default function WeatherCard({ data }) {
  if (!data) return null;

  const {
    location: { name, region, country, localtime },
    current: {
      temp_c,
      condition,
      humidity,
      wind_kph,
      feelslike_c,
      uv,
      pressure_mb,
      vis_km,
    },
  } = data;

  return (
    <Card className="weather-card" elevation={4}>
      <CardContent>
        <Typography variant="h5" className="location">
          {name}, {region}, {country}
        </Typography>
        <Typography variant="subtitle2" className="time">
          Local Time: {localtime}
        </Typography>

        <Divider className="divider" />

        <Box className="weather-details">
          <img
            src={`https:${condition.icon}`}
            alt="icon"
            className="weather-icon"
          />
          <Box className="main-metrics">
            <Typography variant="h4" className="temp">
              {temp_c}°C
            </Typography>
            <Typography variant="subtitle1">{condition.text}</Typography>
            <Typography variant="body2">Feels like: {feelslike_c}°C</Typography>
          </Box>
        </Box>

        <Box className="other-info">
          <Typography variant="body2">💧 Humidity: {humidity}%</Typography>
          <Typography variant="body2">🌬️ Wind: {wind_kph} kph</Typography>
          <Typography variant="body2">🌡️ Pressure: {pressure_mb} mb</Typography>
          <Typography variant="body2">☀️ UV Index: {uv}</Typography>
          <Typography variant="body2">👁️ Visibility: {vis_km} km</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
