import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateSpecificationsInCars } from './CreateSpecificationsInCarsUseCase';

export class CreateSpecificationsInCarsController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { specification_id } = req.body;
    const createSpecificationsInCarsUseCase = container.resolve(
      CreateSpecificationsInCars,
    );

    const car = await createSpecificationsInCarsUseCase.execute({
      car_id: id,
      specification_id,
    });
    res.json(car);
  }
}
