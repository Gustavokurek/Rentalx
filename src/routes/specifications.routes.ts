import { Router } from 'express';

import { specificationsController } from '../modules/cars/UseCases/CreateSpecifications';

const specificationsRoute = Router();

specificationsRoute.post('/', (req, res) => {
  return specificationsController.handle(req, res);
});

export { specificationsRoute };
