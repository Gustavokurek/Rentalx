import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

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
    throw new Error('Token missing');
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, 'Daenerys') as IPayload;
    const userRepository = new UserRepository();
    const user = await userRepository.findById(user_id);

    if (!user) {
      throw new Error('user does not exist');
    }
    console.log(user_id);
    next();
  } catch (err) {
    throw new Error(err);
  }
}
