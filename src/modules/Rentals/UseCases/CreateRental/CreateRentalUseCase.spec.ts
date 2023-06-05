import dayjs from 'dayjs';

import { RentalRepositoryInMemory } from '@modules/Rentals/repositories/in-memory/RentalRepositoryInMemory';
import { DayJsDateProvider } from '@shared/container/providers/DateProvider/implementations/dayJsDateProvider';
import { AppError } from '@shared/errors/appError';

import { CreateRentalUseCase } from './CreateRentalUseCase';

let createRentalUseCase: CreateRentalUseCase;
let rentalRepositoryInMemory: RentalRepositoryInMemory;
let dayjsDateProvider: DayJsDateProvider;

describe('Create Rental', () => {
  const dayAdd24Hours = dayjs().add(1, 'day').toDate();
  beforeEach(() => {
    rentalRepositoryInMemory = new RentalRepositoryInMemory();
    dayjsDateProvider = new DayJsDateProvider();
    createRentalUseCase = new CreateRentalUseCase(
      rentalRepositoryInMemory,
      dayjsDateProvider,
    );
  });

  it('should be able to create a new Rental', async () => {
    const DataRental = {
      user_id: '1',
      car_id: '1',
      expect_return_Date: dayAdd24Hours,
    };
    const rental = await createRentalUseCase.execute(DataRental);

    expect(rental).toHaveProperty('id');
    expect(rental).toHaveProperty('start_date');
  });

  it('should not be able to create a new Rental if there is another open with the same car', async () => {
    expect(async () => {
      const Rental = {
        user_id: 'user 1',
        car_id: 'car id igual',
        expect_return_Date: dayAdd24Hours,
      };
      const Rental2 = {
        user_id: 'user 2',
        car_id: 'car id igual',
        expect_return_Date: dayAdd24Hours,
      };

      await createRentalUseCase.execute(Rental);
      await createRentalUseCase.execute(Rental2);
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a new Rental if there is another open with the same user', async () => {
    expect(async () => {
      const Rental = {
        user_id: 'user id Igual',
        car_id: '1234',
        expect_return_Date: dayAdd24Hours,
      };
      const Rental2 = {
        user_id: 'user id Igual',
        car_id: '14321',
        expect_return_Date: dayAdd24Hours,
      };
      await createRentalUseCase.execute(Rental);
      await createRentalUseCase.execute(Rental2);
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a new Rental with invalid return time', async () => {
    expect(async () => {
      const Rental = {
        user_id: 'User',
        car_id: '1234',
        expect_return_Date: dayjs().toDate(),
      };
      await createRentalUseCase.execute(Rental);
    }).rejects.toBeInstanceOf(AppError);
  });
});
