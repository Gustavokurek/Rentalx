import { Router } from 'express';

import { CreateCarController } from '@modules/cars/UseCases/CreateCars/CreateCarController';
import { CreateSpecificationsInCarsController } from '@modules/cars/UseCases/CreateSpecificationsInCars/CreateSpecificationsInCarsController';
import { ListAvailableCarsController } from '@modules/cars/UseCases/ListCars/ListAvailableCarsController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createCarController = new CreateCarController();
const listCarController = new ListAvailableCarsController();
const createSpecificationsInCarsController =
  new CreateSpecificationsInCarsController();
const carsRoute = Router();

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

export { carsRoute };
