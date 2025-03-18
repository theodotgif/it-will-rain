import { Forecasts } from './forecast';

// Your type files export types but everything else is interfaces - why the inconsistency?
export type City = {
  latitude: number;
  longitude: number;
  forecasts?: Forecasts;
};

export type Cities = { [Key: string]: City };
