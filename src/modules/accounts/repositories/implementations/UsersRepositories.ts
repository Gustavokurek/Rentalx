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
    avatar,
    id,
  }: ICreatedUsersDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      driver_license,
      avatar,
      id,
    });

    await this.repository.save(user);
  }
  async findByEmail(email: string): Promise<Users> {
    const user = await this.repository.findOne({ email });
    return user;
  }
  async findById(id: string): Promise<Users> {
    const user = await this.repository.findOne(id);
    return user;
  }
}
