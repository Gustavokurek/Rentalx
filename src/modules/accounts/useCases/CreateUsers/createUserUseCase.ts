import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/appError';
import { ICreatedUsersDTO } from '../../dtos/ICreatedUsersDTO';
import { IUsersRepository } from '../../repositories/IUsersRepositories';

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUsersRepository,
  ) {}

  async execute({
    name,
    email,
    password,
    driver_license,
  }: ICreatedUsersDTO): Promise<void> {
    const passwordHash = await hash(password, 8);
    const userAlreadyExists = await this.userRepository.findByEmail(email);
    if (userAlreadyExists) {
      throw new AppError('User Already Exist');
    }
    await this.userRepository.create({
      name,
      email,
      password: passwordHash,
      driver_license,
    });
  }
}
