import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  nameCategory: string;
  description: string;
}
export class CreateCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  execute({ nameCategory, description }: IRequest): void {
    const categoryAlreadyExists =
      this.categoriesRepository.findByName(nameCategory);

    if (categoryAlreadyExists) {
      throw new Error('category already exists');
    }

    this.categoriesRepository.create({ nameCategory, description });
  }
}
