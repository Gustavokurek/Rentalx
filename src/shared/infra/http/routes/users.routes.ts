import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';
import { UserController } from '@modules/accounts/useCases/CreateUsers/createUserController';
import { UpdateUserAvatarController } from '@modules/accounts/useCases/UpdateUserAvatar/UpdateUserAvatarController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const usersRoute = Router();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

const userController = new UserController();
const updateUserAvatarController = new UpdateUserAvatarController();
usersRoute.post('/', userController.handle);
usersRoute.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('avatar'),
  updateUserAvatarController.handle,
);

export { usersRoute };
