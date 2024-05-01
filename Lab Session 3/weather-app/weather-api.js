const API_KEY = "9795c4dfb756c5aca45472a235b0ab9b";
const UNITS_METRIC = "metric";

const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

class WeatherAPI {
  constructURL(locationName){
    this.weatherURL = new URL(WEATHER_API_BASE_URL);
    this.weatherURL.searchParams.append("q", locationName);
    this.weatherURL.searchParams.append("appid", API_KEY);
    this.weatherURL.searchParams.append("units", UNITS_METRIC);
    return this.weatherURL.toString();
  }

  async invokeWeatherURL(){
    const responseObj = await fetch(this.weatherURL.toString())
    const weatherResponseJSON = await responseObj.json();
    return weatherResponseJSON;
  }
}

export {WeatherAPI}