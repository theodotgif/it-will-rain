import { useEffect, useState } from 'react';
import Search from '../Search';
import Results from '../Results';
import useDebounce from '../../hooks/useDebounce';
import useCityQuery from '../../hooks/useCityQuery';

const WeatherChecker = () => {
  const [cityQuery, setCityQuery] = useState('');

  const debouncedCityQuery = useDebounce(cityQuery, 750);
  const { cities, fetchCity } = useCityQuery();

  useEffect(() => {
    // A null check here would save an API call on an empty query
    fetchCity(debouncedCityQuery);
  }, [debouncedCityQuery, fetchCity]);

  return (
    <>
      <Search query={cityQuery} setQuery={setCityQuery} />
      {cities[cityQuery] && <Results city={cities[cityQuery]} />}
    </>
  );
};

export default WeatherChecker;
