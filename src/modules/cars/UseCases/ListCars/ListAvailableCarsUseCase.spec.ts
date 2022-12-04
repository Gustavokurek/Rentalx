import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarRepositoryInMemory';

import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let carRepositoryInMemory: ICarsRepository;
let listAvailableCarsUseCase: ListAvailableCarsUseCase;

describe('list Cars', () => {
  beforeEach(() => {
    carRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carRepositoryInMemory,
    );
  });

  it('should be able to list all available cars', async () => {
    const car = await carRepositoryInMemory.create({
      name: 'Name Car',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category',
    });

    const cars = await listAvailableCarsUseCase.execute({});

    console.log(cars);

    expect(cars).toEqual([car]);
  });

  it('should be able to list all cars by name', async () => {
    const car = await carRepositoryInMemory.create({
      name: 'Car1',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'ABC-12345',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category',
    });

    const car2 = await carRepositoryInMemory.create({
      name: 'Car1',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'ABCDEF-12345',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category',
    });
    await carRepositoryInMemory.create({
      name: 'Car12',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'ABCDEF-12345',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category',
    });

    const list = await listAvailableCarsUseCase.execute({ name: 'Car1' });

    console.log(list);

    expect(list).toEqual([car, car2]);
  });
  it('should be able to list all cars by brand', async () => {
    const car = await carRepositoryInMemory.create({
      name: 'Car1',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'ABC-12345',
      fine_amount: 60,
      brand: 'Brand1',
      category_id: 'category',
    });

    const car2 = await carRepositoryInMemory.create({
      name: 'Car1',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'ABCDEF-12345',
      fine_amount: 60,
      brand: 'Brand1',
      category_id: 'category',
    });
    await carRepositoryInMemory.create({
      name: 'Car12',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'ABCDEF-12345',
      fine_amount: 60,
      brand: 'Brand1231231',
      category_id: 'category',
    });

    const list = await listAvailableCarsUseCase.execute({ brand: 'Brand1' });

    console.log(list);

    expect(list).toEqual([car, car2]);
  });
  it('should be able to list all cars by category', async () => {
    const car = await carRepositoryInMemory.create({
      name: 'Car1',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'ABC-12345',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category123',
    });

    const car2 = await carRepositoryInMemory.create({
      name: 'Car1',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'ABCDEF-12345',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category123',
    });
    await carRepositoryInMemory.create({
      name: 'Car12',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'ABCDEF-12345',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category9898989',
    });

    const list = await listAvailableCarsUseCase.execute({
      category_id: 'category123',
    });

    console.log(list);

    expect(list).toEqual([car, car2]);
  });
});
