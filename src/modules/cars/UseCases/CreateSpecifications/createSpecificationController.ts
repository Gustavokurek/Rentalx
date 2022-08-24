import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateSpecificationsUseCase } from './CreateSpecificationUseCase';

export class SpecificationsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { nameSpecification, description } = req.body;
    const SpecificationUseCase = container.resolve(CreateSpecificationsUseCase);
    await SpecificationUseCase.execute({
      nameSpecification,
      description,
    });

    return res.status(201).json();
  }
}
