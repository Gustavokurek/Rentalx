import { Specification } from '@modules/cars/infra/typeorm/entities/Specification';

import {
  ICreatedSpecificationDTO,
  ISpecificationsRepository,
} from '../ISpecificationsRepository';

export class SpecificationRepositoryInMemory
  implements ISpecificationsRepository
{
  private repository: Specification[] = [];
  async create({
    nameSpecification,
    description,
  }: ICreatedSpecificationDTO): Promise<Specification> {
    const specification = new Specification();
    Object.assign(specification, { nameSpecification, description });
    this.repository.push(specification);
    return specification;
  }
  async list(): Promise<Specification[]> {
    const list = this.repository;
    return list;
  }
  async findByName(nameSpecification: string): Promise<Specification> {
    return this.repository.find(
      (spec) => spec.nameSpecification === nameSpecification,
    );
  }
  async findByIds(ids: string[]): Promise<Specification[]> {
    const allSpecifications = this.repository.filter((spec) =>
      ids.includes(spec.id),
    );
    return allSpecifications;
  }
}
