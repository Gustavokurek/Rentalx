import { Router } from 'express';

import { authenticateRoutes } from './Authenticate.routes';
import { carsRoute } from './Cars.routes';
import { categoriesRoute } from './categories.routes';
import { specificationsRoute } from './specifications.routes';
import { usersRoute } from './users.routes';

const router = Router();

router.use('/categories', categoriesRoute);
router.use('/specifications', specificationsRoute);
router.use('/users', usersRoute);
router.use('/Cars', carsRoute);
router.use(authenticateRoutes);

export { router };
