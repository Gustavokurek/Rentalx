import { ISpecificationsRepository } from '../repositories/ISpecificationsRepository';

interface IRequest {
  nameSpecification: string;
  description: string;
}

export class CreateSpecificationsService {
  constructor(private SpecificationsRepository: ISpecificationsRepository) {}
  execute({ nameSpecification, description }: IRequest): void {
    const SpecificationAlreadyExists =
      this.SpecificationsRepository.findByName(nameSpecification);

    if (SpecificationAlreadyExists) {
      throw new Error('Specification already exists');
    }

    this.SpecificationsRepository.create({ nameSpecification, description });
  }
}
