import { ICreatedUsersDTO } from '../dtos/ICreatedUsersDTO';

export interface IUsersRepository {
  create(data: ICreatedUsersDTO): Promise<void>;
}
