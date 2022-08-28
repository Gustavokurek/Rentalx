import { getRepository, Repository } from 'typeorm';

import { Users } from '../../entities/Users';
import { IUsersRepository } from '../IUsersRepositories';

export class UserRepository implements IUsersRepository {
  private repository: Repository<Users>;
  constructor() {
    this.repository = getRepository(Users);
  }
  async create({
    name,
    username,
    email,
    password,
    driver_license,
  }: ICreatedUsersDTO): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      email,
      password,
      driver_license,
    });

    await this.repository.save(user);
  }
}
