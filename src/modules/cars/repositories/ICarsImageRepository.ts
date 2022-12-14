import { CarImages } from '../infra/typeorm/entities/CarImages';

export interface ICarsImageRepository {
  create(image_name: string, car_id: string): Promise<CarImages>;
}
