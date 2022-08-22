import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  nameCategory: string;
  description: string;
}
export class CreateCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  async execute({ nameCategory, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      nameCategory,
    );

    if (categoryAlreadyExists) {
      throw new Error('category already exists');
    }

    this.categoriesRepository.create({ nameCategory, description });
  }
}
