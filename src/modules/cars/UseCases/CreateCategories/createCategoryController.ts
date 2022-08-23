import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCategoriesUseCase } from './CreateCategoryUseCase';

export class CategoriesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { nameCategory, description } = req.body;
    const createCategoryUseCase = container.resolve(CreateCategoriesUseCase);
    await createCategoryUseCase.execute({ nameCategory, description });

    return res.status(201).json();
  }
}
