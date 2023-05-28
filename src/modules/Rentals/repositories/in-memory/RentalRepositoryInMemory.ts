import { Rental } from '@modules/Rentals/infra/typeorm/entities/Rental';

import { IRentalRepository } from '../IRentalRepository';

export class RentalRepositoryInMemory implements IRentalRepository {
  private repository = [];

  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    return this.repository.find(
      (rental) => rental.car_id === car_id && rental.end_date === null,
    );
  }
  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    return this.repository.find(
      (rental) => rental.user_id === user_id && rental.end_date === null,
    );
  }
}
