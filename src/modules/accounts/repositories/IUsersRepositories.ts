import { ICreatedUsersDTO } from '../dtos/ICreatedUsersDTO';
import { Users } from '../entities/Users';

export interface IUsersRepository {
  create(data: ICreatedUsersDTO): Promise<void>;
  findByEmail(email: string): Promise<Users>;
  findById(id: string): Promise<Users>;
}
