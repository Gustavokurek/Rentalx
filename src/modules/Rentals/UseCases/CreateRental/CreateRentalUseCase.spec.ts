import { RentalRepositoryInMemory } from '@modules/Rentals/repositories/in-memory/RentalRepositoryInMemory';

import { CreateRentalUseCase } from './CreateRentalUseCase';

let createRentalUseCase: CreateRentalUseCase;
let rentalRepositoryInMemory: RentalRepositoryInMemory;

describe('Create Rental', () => {
  beforeEach(() => {
    rentalRepositoryInMemory = new RentalRepositoryInMemory();
    createRentalUseCase = new CreateRentalUseCase(rentalRepositoryInMemory);
  });

  it('should be able to create a new Rental', () => {
    const DataRental = {
      user_id: '1',
      car_id: '1',
      expect_return_Date: new Date(),
    };
    return createRentalUseCase.execute(DataRental);
  });
});
