const URL = `https://api.weatherapi.com/v1/current.json`;

let getWeatherInfo = async (locationQuery) => {
  try {
    let api_key = import.meta.env.VITE_WEATHER_API_KEY;
    let response = await fetch(`${URL}?key=${api_key}&q=${locationQuery}`);
    const weatherData = await response.json();
      if (!response.ok || data.error) {
      throw new Error(data.error?.message || "Unknown API error.");
    }
    return weatherData;
  } catch (error) {
    return {
      error: {
        message: err.message || "Network error. Please check your connection",
      },
    };
  }
};

export default getWeatherInfo;
