import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';

import { CreateCarUseCase } from './CreateCarUseCase';

export class CreateCarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      license_plate,
      name,
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
    }: ICreateCarDTO = req.body;

    const carUseCase = container.resolve(CreateCarUseCase);

    const car = await carUseCase.execute({
      license_plate,
      name,
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
    });

    return res.status(201).json(car);
  }
}
