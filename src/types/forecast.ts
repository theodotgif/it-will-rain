// Your type files export types but everything else is interfaces - why the inconsistency?
export type Forecast = {
  date: Date;
  weatherCode: string;
  temperature: number;
  windSpeed: number;
  windDirection: number;
};

export type Forecasts = Array<Forecast>;
