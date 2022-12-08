import { Specification } from '../infra/typeorm/entities/Specification';

export interface ICreatedSpecificationDTO {
  nameSpecification: string;
  description: string;
}
export interface ISpecificationsRepository {
  create({
    nameSpecification,
    description,
  }: ICreatedSpecificationDTO): Promise<Specification>;
  list(): Promise<Specification[]>;
  findByName(nameSpecification: string): Promise<Specification>;
  findByIds(ids: string[]): Promise<Specification[]>;
}
