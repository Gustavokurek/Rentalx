import { Router } from 'express';
import multer from 'multer';

import { categoriesController } from '../modules/cars/UseCases/CreateCategories';
import { listCategoriesController } from '../modules/cars/UseCases/ListCategories';

const upload = multer({ dest: './tmp' });

const categoriesRoute = Router();

categoriesRoute.post('/', (req, res) => {
  return categoriesController.handle(req, res);
});

categoriesRoute.get('/', (req, res) => {
  return listCategoriesController.handle(req, res);
});

categoriesRoute.post('/import', upload.single('file'), (req, res) => {
  const { file } = req;
  console.log(file);
  return res.send();
});

export { categoriesRoute };
