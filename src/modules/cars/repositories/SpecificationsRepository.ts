import { Specification } from '../models/Specification';
import {
  ICreatedSpecificationDTO,
  ISpecificationsRepository,
} from './ISpecificationsRepository';

export class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];
  constructor() {
    this.specifications = [];
  }

  create({ nameSpecification, description }: ICreatedSpecificationDTO) {
    const specification = new Specification();
    Object.assign(specification, {
      nameSpecification,
      description,
      created_at: new Date(),
    });
    this.specifications.push(specification);
  }

  list(): Specification[] {
    const list = this.specifications;
    return list;
  }

  findByName(nameSpecification: string): Specification {
    const specification = this.specifications.find(
      (Specification) => Specification.nameSpecification === nameSpecification,
    );
    return specification;
  }
}
