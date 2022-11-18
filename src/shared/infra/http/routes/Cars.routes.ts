import { Router } from 'express';

import { CreateCarController } from '@modules/cars/UseCases/CreateCars/CreateCarController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createCarController = new CreateCarController();
const carsRoute = Router();

carsRoute.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle,
);

export { carsRoute };
