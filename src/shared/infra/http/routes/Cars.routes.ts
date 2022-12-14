import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';
import { CreateCarController } from '@modules/cars/UseCases/CreateCars/CreateCarController';
import { CreateSpecificationsInCarsController } from '@modules/cars/UseCases/CreateSpecificationsInCars/CreateSpecificationsInCarsController';
import { ListAvailableCarsController } from '@modules/cars/UseCases/ListCars/ListAvailableCarsController';
import { UploadCarsImagesController } from '@modules/cars/UseCases/UploadCarsImages/UploadCarsImagesController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createCarController = new CreateCarController();
const listCarController = new ListAvailableCarsController();
const createSpecificationsInCarsController =
  new CreateSpecificationsInCarsController();
const uploadCarsImages = new UploadCarsImagesController();
const carsRoute = Router();

const upload = multer(uploadConfig.upload('./tmp/cars'));

carsRoute.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle,
);
carsRoute.post(
  '/specifications/:id',
  ensureAuthenticated,
  ensureAdmin,
  createSpecificationsInCarsController.handle,
);

carsRoute.get('/available', listCarController.handle);

carsRoute.post(
  '/images/:id',
  ensureAuthenticated,
  ensureAdmin,
  upload.array('images'),
  uploadCarsImages.handle,
);

export { carsRoute };
