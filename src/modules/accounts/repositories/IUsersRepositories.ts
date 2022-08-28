export interface IUsersRepository {
  create(data: ICreatedUsersDTO): Promise<void>;
}
