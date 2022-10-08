import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from '../errors/appError';
import { UserRepository } from '../modules/accounts/repositories/implementations/UsersRepositories';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  Response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, 'Daenerys') as IPayload;
    const userRepository = new UserRepository();
    const user = await userRepository.findById(user_id);

    if (!user) {
      throw new AppError('user does not exist', 401);
    }
    console.log(user_id);

    request.user = { id: user.id };
    next();
  } catch (err) {
    throw new AppError(err);
  }
}
