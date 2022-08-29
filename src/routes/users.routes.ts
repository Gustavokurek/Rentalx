import { Router } from 'express';

import { UserController } from '../modules/accounts/useCases/CreateUsers/createUserController';

const usersRoute = Router();

const userController = new UserController();
usersRoute.post('/', userController.handle);

export { usersRoute };
