import { Router } from 'express';

import { SpecificationsController } from '@modules/cars/UseCases/CreateSpecifications/createSpecificationController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const specificationsRoute = Router();
const specificationsController = new SpecificationsController();

specificationsRoute.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  specificationsController.handle,
);

export { specificationsRoute };
