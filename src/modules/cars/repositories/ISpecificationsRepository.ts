import { Specification } from '../entities/Specification';

export interface ICreatedSpecificationDTO {
  nameSpecification: string;
  description: string;
}
export interface ISpecificationsRepository {
  create({
    nameSpecification,
    description,
  }: ICreatedSpecificationDTO): Promise<void>;
  list(): Promise<Specification[]>;
  findByName(nameSpecification: string): Promise<Specification>;
}
