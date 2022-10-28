import { Router } from 'express';
import multer from 'multer';

import { CategoriesController } from '@modules/cars/UseCases/CreateCategories/createCategoryController';
import { ImportCategoriesController } from '@modules/cars/UseCases/ImportCategories/ImportCategoriescontroller';
import { ListCategoryController } from '@modules/cars/UseCases/ListCategories/ListCategoryController';

const upload = multer({ dest: './tmp' });

const categoriesRoute = Router();

const createCategoryController = new CategoriesController();
const importCategoriesController = new ImportCategoriesController();
const listCategoryController = new ListCategoryController();

categoriesRoute.post('/', createCategoryController.handle);

categoriesRoute.get('/', listCategoryController.handle);

categoriesRoute.post(
  '/import',
  upload.single('file'),
  importCategoriesController.handle,
);

export { categoriesRoute };
