export interface Builder {
  withModel(model: string): this;
  withColor(color: string): this;
  withTransmission(transmission: Transmission): this;
  withMotor(motor: Motor): this;
  withExtras(extras: Extras): this;
  build(): unknown;
}

export enum Transmission {
  MANUAL = 'manual',
  AUTOMATIC = 'automatic',
}

export enum Motor {
  FUEL = 'fuel',
  DIESEL = 'diesel',
  ELECTRIC = 'electric',
}

export enum Extras {
  GPS = 'gps',
  SOLAR_ROOF = 'solar_roof',
  HEATED_SEATS = 'heated_seats',
}

export type Car = {
  model: string;
  color: string;
  transmission: Transmission;
  motor: Motor;
  extras: Extras[];
};
