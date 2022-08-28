import { inject } from 'tsyringe';

import { UserRepository } from '../../repositories/implementations/UsersRepositories';

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
