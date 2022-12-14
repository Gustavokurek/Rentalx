import { inject, injectable } from 'tsyringe';

import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';
import { AppError } from '@shared/errors/appError';

interface IRequest {
  nameCategory: string;
  description: string;
}

@injectable()
export class CreateCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}
  async execute({ nameCategory, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      nameCategory,
    );

    if (categoryAlreadyExists) {
      throw new AppError('category already exists', 400);
    }

    this.categoriesRepository.create({ nameCategory, description });
  }
}
