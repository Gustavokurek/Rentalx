import { getRepository, Repository } from 'typeorm';

import { ICarsImageRepository } from '@modules/cars/repositories/ICarsImageRepository';

import { CarImages } from '../entities/CarImages';

export class CarsImagesRepository implements ICarsImageRepository {
  private repository: Repository<CarImages>;

  constructor() {
    this.repository = getRepository(CarImages);
  }
  async create(image_name: string, car_id: string): Promise<CarImages> {
    const carImage = this.repository.create({ car_id, image_name });
    await this.repository.save(carImage);
    return carImage;
  }
}
