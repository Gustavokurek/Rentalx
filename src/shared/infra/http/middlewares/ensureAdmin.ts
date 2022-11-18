import { NextFunction, Request, Response } from 'express';

import { UserRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepositories';
import { AppError } from '@shared/errors/appError';

export async function ensureAdmin(
  request: Request,
  Response: Response,
  next: NextFunction,
) {
  const userRepository = new UserRepository();

  const { id } = request.user;

  const user = userRepository.findById(id);

  if (!(await user).admin) {
    throw new AppError('user isn`t admin ');
  }

  return next();
}
