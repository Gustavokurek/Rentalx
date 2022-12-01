import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';

interface IRequest {
  brand?: string;
  category_id?: string;
  name?: string;
}

export class ListCarsUseCase {
  constructor(private CarsRepository: ICarsRepository) {}
  async execute({ brand, category_id, name }: IRequest): Promise<Car[]> {
    const cars = await this.CarsRepository.findAvailable(
      brand,
      category_id,
      name,
    );
    return cars;
  }
}
