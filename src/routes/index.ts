import { Router } from 'express';

import { categoriesRoute } from './categories.routes';
import { specificationsRoute } from './specifications.routes';
import { usersRoute } from './users.routes';

const router = Router();

router.use('/categories', categoriesRoute);
router.use('/specifications', specificationsRoute);
router.use('/users', usersRoute);

export { router };
