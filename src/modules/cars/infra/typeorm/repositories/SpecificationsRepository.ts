import { getRepository, Repository } from 'typeorm';

import {
  ICreatedSpecificationDTO,
  // eslint-disable-next-line prettier/prettier
  ISpecificationsRepository
} from '@modules/cars/repositories/ISpecificationsRepository';

import { Specification } from '../entities/Specification';

export class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;
  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({
    nameSpecification,
    description,
  }: ICreatedSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      nameSpecification,
      description,
    });

    await this.repository.save(specification);
  }

  async list(): Promise<Specification[]> {
    const list = await this.repository.find();
    return list;
  }

  async findByName(nameSpecification: string): Promise<Specification> {
    const specification = await this.repository.findOne({ nameSpecification });
    return specification;
  }
}
