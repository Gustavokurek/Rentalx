import { Router } from 'express';

import { SpecificationsController } from '@modules/cars/UseCases/CreateSpecifications/createSpecificationController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const specificationsRoute = Router();
const specificationsController = new SpecificationsController();

specificationsRoute.use(ensureAuthenticated);
specificationsRoute.post('/', specificationsController.handle);

export { specificationsRoute };
