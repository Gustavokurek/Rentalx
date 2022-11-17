import { Router } from 'express';

import { CreateCarController } from '@modules/cars/UseCases/CreateCars/CreateCarController';

const createCarController = new CreateCarController();
const carsRoute = Router();

carsRoute.post('/', createCarController.handle);

export { carsRoute };
