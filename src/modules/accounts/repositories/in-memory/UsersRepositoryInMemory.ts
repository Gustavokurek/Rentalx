import { ICreatedUsersDTO } from '../../dtos/ICreatedUsersDTO';
import { Users } from '../../infra/typeorm/entities/Users';
import { IUsersRepository } from '../IUsersRepositories';

export class UserRepositoryInMemory implements IUsersRepository {
  private users: Users[] = [];
  async create({
    name,
    email,
    password,
    driver_license,
  }: ICreatedUsersDTO): Promise<void> {
    const user = new Users();
    Object.assign(user, {
      name,
      email,
      password,
      driver_license,
    });
    this.users.push(user);
  }
  async findByEmail(email: string): Promise<Users> {
    return this.users.find((user) => user.email === email);
  }
  async findById(id: string): Promise<Users> {
    return this.users.find((user) => user.id === id);
  }
}
