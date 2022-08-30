import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { UserRepository } from '../../repositories/implementations/UsersRepositories';

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
    private userRepository: UserRepository,
  ) {}

  async execute({ email, password }: IRequest) {
    // usuário existe
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error('email or password is incorrect');
    }

    // senha correta
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('email or password is incorrect');
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
