import { useCallback, useState } from 'react';
import { Cities, City } from '../types/city';
import { Forecasts } from '../types/forecast';

const useCityQuery = () => {
  const [cities, setCities] = useState<Cities>({});

  const fetchCity = useCallback(
    async (searchQuery: string) => {
      const queryLowercase = searchQuery.toLowerCase();

      if (!queryLowercase) {
        return;
      }

      if (cities[queryLowercase]) {
        return cities[queryLowercase];
      }
      // All this data fetching should be in a try/catch block
      const res = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${queryLowercase}&count=1`,
      );
      // Could add a check here to see if the response is ok for better error handling
      // Nit - Data could be typed
      const data = await res.json();
      // nit - You've destructured latitude and longitude from results below, can you not do the same here for consistency?
      // Waht type is results?
      const results = data.results;

      if (results?.length === 0) {
        return;
      }

      const { latitude, longitude } = results[0] as City;

      // if resWeather.ok...
      const resWeather = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&forecast_days=5&daily=weather_code,apparent_temperature_max,wind_speed_10m_max,wind_direction_10m_dominant`,
      );
      const { daily } = await resWeather.json();

      const cityResults: Forecasts = [];
      // Ew David! - map this directly into cityResults
      for (let i = 0; i < 5; i++) {
        cityResults.push({
          date: new Date(daily.time[i]),
          weatherCode: daily.weather_code[i],
          temperature: daily.apparent_temperature_max[i],
          windSpeed: daily.wind_speed_10m_max[i],
          windDirection: daily.wind_direction_10m_dominant[i],
        });
      }
      // A functional state update would be better here - setCities((prevCities) => (...))
      setCities({
        ...cities,
        [`${queryLowercase}`]: {
          latitude,
          longitude,
          forecasts: cityResults,
        },
      });
    },
    [cities],
  );

  return {
    cities,
    fetchCity,
  };
};

export default useCityQuery;
