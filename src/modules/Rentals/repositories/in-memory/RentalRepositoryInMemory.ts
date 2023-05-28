import { ICreateRentalDTO } from '@modules/Rentals/dtos/ICreateRentalDTO';
import { Rental } from '@modules/Rentals/infra/typeorm/entities/Rental';

import { IRentalRepository } from '../IRentalRepository';

export class RentalRepositoryInMemory implements IRentalRepository {
  private repository = [];
  
  async create({user_id, expect_return_Date, car_id}: ICreateRentalDTO): Promise<Rental> {
    const rental= new Rental();
    Object.assign(rental, {
      user_id, expect_return_Date, car_id, start_date: new Date()
    })

    await this.repository.push(rental)
    return rental
  }

  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    return this.repository.find(
      (rental) => rental.car_id === car_id && !rental.end_date 
    );
  }
  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    return this.repository.find(
      (rental) => rental.user_id === user_id && !rental.end_date 
    );
  }
}
