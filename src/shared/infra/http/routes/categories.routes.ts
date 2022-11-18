import { Router } from 'express';
import multer from 'multer';

import { CategoriesController } from '@modules/cars/UseCases/CreateCategories/createCategoryController';
import { ImportCategoriesController } from '@modules/cars/UseCases/ImportCategories/ImportCategoriescontroller';
import { ListCategoryController } from '@modules/cars/UseCases/ListCategories/ListCategoryController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const upload = multer({ dest: './tmp' });

const categoriesRoute = Router();

const createCategoryController = new CategoriesController();
const importCategoriesController = new ImportCategoriesController();
const listCategoryController = new ListCategoryController();

categoriesRoute.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCategoryController.handle,
);

categoriesRoute.get('/', listCategoryController.handle);

categoriesRoute.post(
  '/import',
  ensureAuthenticated,
  ensureAdmin,
  upload.single('file'),
  importCategoriesController.handle,
);

export { categoriesRoute };
