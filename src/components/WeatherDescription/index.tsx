import { weatherCodes } from '../../assets/weatherCodes';

import classes from './WeatherDescription.module.css';

interface WeatherDescriptionProps {
  weatherCode: string;
}

const WeatherDescription = ({ weatherCode = '0' }: WeatherDescriptionProps) => {
  return (
    // some optinal chaining would be good here in case we get hit with a new weather code
    <p className={classes.description}>{weatherCodes[weatherCode].text}</p>
  );
};

export default WeatherDescription;
