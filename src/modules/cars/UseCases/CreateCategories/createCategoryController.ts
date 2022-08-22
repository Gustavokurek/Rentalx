import { Request, Response } from 'express';

import { CreateCategoriesUseCase } from './CreateCategoryUseCase';

export class CategoriesController {
  constructor(private createCategoryUseCase: CreateCategoriesUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { nameCategory, description } = req.body;
    await this.createCategoryUseCase.execute({ nameCategory, description });

    return res.status(201).json();
  }
}
