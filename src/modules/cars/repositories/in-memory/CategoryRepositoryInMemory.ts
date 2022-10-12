import { Category } from '../../entities/Category';
import {
  ICategoriesRepository,
  ICreatedCategoryDTO,
} from '../ICategoriesRepository';

export class CategoryRepositoryInMemory implements ICategoriesRepository {
  private categories: Category[] = [];
  async create({
    nameCategory,
    description,
  }: ICreatedCategoryDTO): Promise<void> {
    const category = new Category();
    Object.assign(category, {
      nameCategory,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }
  async list(): Promise<Category[]> {
    const { categories } = this;
    return categories;
  }
  async findByName(nameCategory: string): Promise<Category> {
    const category = this.categories.find(
      (category) => category.nameCategory === nameCategory,
    );
    return category;
  }
}
