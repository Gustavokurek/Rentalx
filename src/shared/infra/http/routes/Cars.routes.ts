import { Router } from 'express';

import { CreateCarController } from '@modules/cars/UseCases/CreateCars/CreateCarController';
import { ListAvailableCarsController } from '@modules/cars/UseCases/ListCars/ListAvailableCarsController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createCarController = new CreateCarController();
const listCarController = new ListAvailableCarsController();
const carsRoute = Router();

carsRoute.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle,
);

carsRoute.get('/available', listCarController.handle);

export { carsRoute };
