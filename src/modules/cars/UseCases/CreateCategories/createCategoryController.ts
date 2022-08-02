import { Request, Response } from 'express';

import { CreateCategoriesUseCase } from './CreateCategoryUseCase';

export class CategoriesController {
  constructor(private createCategoryUseCase: CreateCategoriesUseCase) {}
  handle(req: Request, res: Response): Response {
    const { nameCategory, description } = req.body;
    this.createCategoryUseCase.execute({ nameCategory, description });

    return res.status(201).json();
  }
}
