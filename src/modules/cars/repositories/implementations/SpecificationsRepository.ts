import { Specification } from '../../entities/Specification';
import {
  ICreatedSpecificationDTO,
  ISpecificationsRepository,
} from '../ISpecificationsRepository';

export class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];
  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: SpecificationsRepository;
  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTANCE;
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
