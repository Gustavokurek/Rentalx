import { Specification } from '../models/Specification';

export interface ICreatedSpecificationDTO {
  nameSpecification: string;
  description: string;
}
export interface ISpecificationsRepository {
  create({ nameSpecification, description }: ICreatedSpecificationDTO): void;
  list(): Specification[];
  findByName(nameSpecification: string): Specification;
}