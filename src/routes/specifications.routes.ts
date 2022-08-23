import { Router } from 'express';

import { SpecificationsController } from '../modules/cars/UseCases/CreateSpecifications/createSpecificationController';

const specificationsRoute = Router();
const specificationsController = new SpecificationsController();

specificationsRoute.post('/', specificationsController.handle);

export { specificationsRoute };
