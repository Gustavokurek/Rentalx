import { Router } from 'express';
import multer from 'multer';

import { CategoriesController } from '../modules/cars/UseCases/CreateCategories/createCategoryController';
import { importCategoriesController } from '../modules/cars/UseCases/ImportCategories';
import { listCategoriesController } from '../modules/cars/UseCases/ListCategories';

const upload = multer({ dest: './tmp' });

const categoriesRoute = Router();

const createCategoryController = new CategoriesController();
categoriesRoute.post('/', createCategoryController.handle);

categoriesRoute.get('/', (req, res) => {
  return listCategoriesController.handle(req, res);
});

categoriesRoute.post('/import', upload.single('file'), (req, res) => {
  return importCategoriesController.handle(req, res);
});

export { categoriesRoute };
