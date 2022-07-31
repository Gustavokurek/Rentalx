import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

export class CreateCategoriesService {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  execute({ nameCategory, description }): void {
    const categoryAlreadyExists =
      this.categoriesRepository.findByName(nameCategory);

    if (categoryAlreadyExists) {
      throw new Error('category already exists');
    }

    this.categoriesRepository.create({ nameCategory, description });
  }
}
