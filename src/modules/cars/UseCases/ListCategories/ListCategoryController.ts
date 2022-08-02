import { Request, Response } from 'express';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

export class ListCategoryController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}
  handle(req: Request, res: Response): Response {
    const all = this.listCategoriesUseCase.execute();
    return res.json(all);
  }
}
