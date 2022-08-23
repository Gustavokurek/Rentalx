import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateSpecificationsUseCase } from './CreateSpecificationUseCase';

export class SpecificationsController {
  handle(req: Request, res: Response): Response {
    const { nameSpecification, description } = req.body;
    const createSpecificationUseCase = container.resolve(
      CreateSpecificationsUseCase,
    );
    createSpecificationUseCase.execute({ nameSpecification, description });

    return res.status(201).json();
  }
}
