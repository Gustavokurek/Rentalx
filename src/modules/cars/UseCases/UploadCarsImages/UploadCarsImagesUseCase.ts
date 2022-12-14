import { inject, injectable } from 'tsyringe';

import { ICarsImageRepository } from '@modules/cars/repositories/ICarsImageRepository';

interface IRequest {
  car_id: string;
  image_name: string[];
}

@injectable()
export class UploadCarsImagesUseCase {
  constructor(
    @inject('CarsImagesRepository')
    private repository: ICarsImageRepository,
  ) {}
  async execute({ car_id, image_name }: IRequest): Promise<void> {
    image_name.map(
      // eslint-disable-next-line no-return-await
      async (image) => await this.repository.create(image, car_id),
    );
  }
}
