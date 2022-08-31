import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { SpecificationsController } from '../modules/cars/UseCases/CreateSpecifications/createSpecificationController';

const specificationsRoute = Router();
const specificationsController = new SpecificationsController();

specificationsRoute.use(ensureAuthenticated);
specificationsRoute.post('/', specificationsController.handle);

export { specificationsRoute };
