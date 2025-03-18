import { weatherCodes } from '../../assets/weatherCodes';

import classes from './WeatherIcon.module.css';


interface WeatherIconProps {
  weatherCode: string;
}

const WeatherIcon = ({ weatherCode = '0' }: WeatherIconProps) => {
  return (
    <img
    // What if the API returns a new weathercode that doesn't exist in our array?
      src={weatherCodes[weatherCode].img}
      alt={weatherCodes[weatherCode].text}
      className={classes.img}
    />
  );
};

export default WeatherIcon;
