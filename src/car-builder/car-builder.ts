import { Builder, Car, Transmission, Motor, Extras } from './car-types';

class CarBuilder implements Builder<Car> {
  #car: Car;

  constructor() {
    this.#car = {
      model: '911 GTX',
      color: 'red',
      transmission: Transmission.MANUAL,
      motor: Motor.FUEL,
      extras: new Set(),
    };
  }

  withModel(model: string): this {
    this.#car.model = model;
    return this;
  }
  withColor(color: string): this {
    this.#car.color = color;
    return this;
  }
  withTransmission(transmission: Transmission): this {
    this.#car.transmission = transmission;
    return this;
  }
  withMotor(motor: Motor): this {
    this.#car.motor = motor;
    return this;
  }
  addExtras(...extras: Extras[]): this {
    extras.forEach((extra) => this.#car.extras.add(extra));
    return this;
  }
  build(): Car {
    return this.#car;
  }
}

export default CarBuilder;
