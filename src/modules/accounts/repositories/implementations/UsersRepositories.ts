import { getRepository, Repository } from 'typeorm';

import { ICreatedUsersDTO } from '../../dtos/ICreatedUsersDTO';
import { Users } from '../../entities/Users';
import { IUsersRepository } from '../IUsersRepositories';

export class UserRepository implements IUsersRepository {
  private repository: Repository<Users>;
  constructor() {
    this.repository = getRepository(Users);
  }
  async create({
    name,
    email,
    password,
    driver_license,
  }: ICreatedUsersDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      driver_license,
    });

    await this.repository.save(user);
  }
}
