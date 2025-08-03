import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import getWeatherInfo from "./weather";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

import "./SearchBar.css";

export default function SearchBar({ setWeatherData }) {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCityChange = (e) => setCity(e.target.value);
  const handleCountryChange = (e) => setCountry(e.target.value);

  let handleFormSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!city.trim() || !country.trim()) {
      setError("City and Country are required.");
      return;
    }
    try {
      setLoading(true);
      const query = `${city.trim()},${country.trim()}`;

      const data = await getWeatherInfo(query); //api call
      if (!data || data.error) {
        setError(data?.error?.message || "City not found or API error.");
        setWeatherData(null);
      } else {
        setWeatherData(data);
        setError("");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <h2 className="search-heading">Search Weather</h2>

      {error && (
        <Alert
          severity="error"
          style={{ maxWidth: "500px", margin: "0 auto 1rem" }}>
          {error}
        </Alert>
      )}

      <form action="#" onSubmit={handleFormSubmit} className="search-form">
        <TextField
          className="custom-input"
          id="city"
          label="Search city"
          variant="outlined"
          value={city}
          onChange={handleCityChange}
          required
        />
        <TextField
          className="custom-input"
          label="Country"
          variant="outlined"
          value={country}
          onChange={handleCountryChange}
          required
        />
        <Button
          variant="contained"
          type="submit"
          startIcon={<SearchIcon />}
          className="search-button"
          disabled={loading}>
          {loading ? (
            <CircularProgress size={20} style={{ color: "#fff" }} />
          ) : (
            "SEARCH"
          )}
        </Button>
      </form>
    </div>
  );
}
