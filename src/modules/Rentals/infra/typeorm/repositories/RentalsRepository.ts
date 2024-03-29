/* eslint-disable no-return-await */
import { getRepository, Repository } from 'typeorm';

import { ICreateRentalDTO } from '@modules/Rentals/dtos/ICreateRentalDTO';
import { IRentalRepository } from '@modules/Rentals/repositories/IRentalRepository';

import { Rental } from '../entities/Rental';

export class RentalsRepository implements IRentalRepository {
  private repository: Repository<Rental>;

  constructor() {
    this.repository = getRepository(Rental);
  }

  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    return await this.repository.findOne({ car_id });
  }
  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    return await this.repository.findOne({ user_id });
  }

  async create({
    user_id,
    expect_return_Date,
    car_id,
  }: ICreateRentalDTO): Promise<Rental> {
    const rental = this.repository.create({
      car_id,
      expect_return_Date,
      user_id,
    });

    await this.repository.save(rental);
    return rental;
  }
}
