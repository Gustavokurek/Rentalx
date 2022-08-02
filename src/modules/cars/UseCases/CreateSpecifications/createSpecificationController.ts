import { Request, Response } from 'express';

import { CreateSpecificationsUseCase } from './CreateSpecificationUseCase';

export class SpecificationsController {
  constructor(
    private createSpecificationUseCase: CreateSpecificationsUseCase,
  ) {}
  handle(req: Request, res: Response): Response {
    const { nameSpecification, description } = req.body;
    this.createSpecificationUseCase.execute({ nameSpecification, description });

    return res.status(201).json();
  }
}
