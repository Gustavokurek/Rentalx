import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarRepositoryInMemory';
import { SpecificationRepositoryInMemory } from '@modules/cars/repositories/in-memory/SpecificationRepositoryInMemory';
import { AppError } from '@shared/errors/appError';

import { CreateSpecificationsInCars } from './CreateSpecificationsInCarsUseCase';

let createSpecificationsInCars: CreateSpecificationsInCars;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationRepositoryInMemory: SpecificationRepositoryInMemory;

describe('Create specification in the car', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    specificationRepositoryInMemory = new SpecificationRepositoryInMemory();

    createSpecificationsInCars = new CreateSpecificationsInCars(
      carsRepositoryInMemory,
      specificationRepositoryInMemory,
    );
  });

  it(' should not be able to add a specification on a non-existent car', async () => {
    expect(async () => {
      const car_id = 'carTest';
      const specification_id = ['specificationTest'];
      await createSpecificationsInCars.execute({
        car_id,
        specification_id,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it(' should be able add a specification in the car', async () => {
    const car1 = carsRepositoryInMemory.create({
      name: 'Name Car',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category',
    });

    const specification = await specificationRepositoryInMemory.create({
      description: 'test',
      nameSpecification: 'tests',
    });

    const specificationsCars = await createSpecificationsInCars.execute({
      car_id: (await car1).id,
      specification_id: [specification.id],
    });
    expect(specificationsCars).toHaveProperty('specifications');
    expect(specificationsCars.specifications.length).toBe(1);
  });
});
