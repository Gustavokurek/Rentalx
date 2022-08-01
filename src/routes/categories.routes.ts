import { Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoriesService } from '../modules/cars/services/CreateCategoryService';

const categoriesRoute = Router();
const categoriesRepository = new CategoriesRepository();
const categoriesCreate = new CreateCategoriesService(categoriesRepository);

categoriesRoute.post('/', (req, res) => {
  const { nameCategory, description } = req.body;
  categoriesCreate.execute({ nameCategory, description });

  return res.status(201).json();
});

categoriesRoute.get('/', (req, res) => {
  const all = categoriesRepository.list();
  return res.json(all);
});

export { categoriesRoute };
