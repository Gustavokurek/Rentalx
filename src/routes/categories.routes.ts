import { Router } from 'express';

import { categoriesController } from '../modules/cars/UseCases/CreateCategories';
import { listCategoriesController } from '../modules/cars/UseCases/ListCategories';

const categoriesRoute = Router();

categoriesRoute.post('/', (req, res) => {
  return categoriesController.handle(req, res);
});

categoriesRoute.get('/', (req, res) => {
  return listCategoriesController.handle(req, res);
});

export { categoriesRoute };
