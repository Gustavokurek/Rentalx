import { inject, injectable } from 'tsyringe';

import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';
import { AppError } from '@shared/errors/appError';

interface IRequest {
  nameSpecification: string;
  description: string;
}
@injectable()
export class CreateSpecificationsUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository,
  ) {}
  async execute({ nameSpecification, description }: IRequest): Promise<void> {
    const SpecificationAlreadyExists =
      await this.specificationsRepository.findByName(nameSpecification);

    if (SpecificationAlreadyExists) {
      throw new AppError('Specification already exists');
    }

    await this.specificationsRepository.create({
      nameSpecification,
      description,
    });
  }
}
