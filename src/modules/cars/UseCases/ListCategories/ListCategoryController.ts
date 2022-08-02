import { Request, Response } from 'express';

import { ListCategoriesUseCase } from './ListCategoryUseCase';

export class ListCategoryController {
  constructor(private listCategoriesUseCases: ListCategoriesUseCase) {}
  handle(req: Request, res: Response): Response {
    const all = this.listCategoriesUseCases.execute();
    return res.json(all);
  }
}
