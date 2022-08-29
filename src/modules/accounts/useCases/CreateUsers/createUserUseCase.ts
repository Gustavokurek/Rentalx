import { inject, injectable } from 'tsyringe';

import { ICreatedUsersDTO } from '../../dtos/ICreatedUsersDTO';
import { UserRepository } from '../../repositories/implementations/UsersRepositories';

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: UserRepository,
  ) {}

  async execute({
    name,
    email,
    password,
    username,
    driver_license,
  }: ICreatedUsersDTO): Promise<void> {
    await this.userRepository.create({
      name,
      email,
      password,
      username,
      driver_license,
    });
  }
}
