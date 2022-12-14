import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UploadCarsImagesUseCase } from './UploadCarsImagesUseCase';

interface IFiles {
  filename: string;
}

export class UploadCarsImagesController {
  async handle(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const images = req.files as IFiles[];

    const image_name = images.map((image) => image.filename);
    const uploadCarsImagesUseCase = container.resolve(UploadCarsImagesUseCase);
    await uploadCarsImagesUseCase.execute({
      car_id: id,
      image_name,
    });

    res.status(201).send();
  }
}
