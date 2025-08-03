import { useState } from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
    const [weatherData, setWeatherData] = useState(null);

  return (
    <div className="App">
      <NavBar />
      <SearchBar setWeatherData={setWeatherData} />
      <WeatherCard data={weatherData} />
    </div>
  );
}

export default App;