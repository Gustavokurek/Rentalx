import { inject, injectable } from 'tsyringe';

import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  nameSpecification: string;
  description: string;
}
@injectable()
export class CreateSpecificationsUseCase {
  constructor(
    @inject('SpecificationRepository')
    private specificationsRepository: ISpecificationsRepository,
  ) {}
  execute({ nameSpecification, description }: IRequest): void {
    const SpecificationAlreadyExists =
      this.specificationsRepository.findByName(nameSpecification);

    if (SpecificationAlreadyExists) {
      throw new Error('Specification already exists');
    }

    this.specificationsRepository.create({ nameSpecification, description });
  }
}
