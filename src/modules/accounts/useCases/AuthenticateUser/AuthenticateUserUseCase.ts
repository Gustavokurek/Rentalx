import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepositories';
import { AppError } from '@shared/errors/appError';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token;
}
@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUsersRepository,
  ) {}

  async execute({ email, password }: IRequest) {
    // usuário existe
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new AppError('email or password is incorrect');
    }

    // senha correta
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new AppError('email or password is incorrect');
    }

    // gerar jwt

    const token = sign({}, 'Daenerys', {
      subject: user.id,
      expiresIn: '1d',
    });

    const ResponseToken: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };

    return ResponseToken;
  }
}
