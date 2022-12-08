import { inject, injectable } from 'tsyringe';

import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';
import { AppError } from '@shared/errors/appError';

interface IRequest {
  car_id: string;
  specification_id: string[];
}

@injectable()
export class CreateSpecificationsInCars {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
    @inject('SpecificationsRepository')
    private specificationRepository: ISpecificationsRepository,
  ) {}
  async execute({ car_id, specification_id }: IRequest): Promise<Car> {
    const carExist = await this.carsRepository.findByID(car_id);

    if (!carExist) {
      throw new AppError('car does not exist');
    }

    const specification = await this.specificationRepository.findByIds(
      specification_id,
    );
    carExist.specifications = specification;
    const car = await this.carsRepository.create(carExist);
    return car;
  }
}
