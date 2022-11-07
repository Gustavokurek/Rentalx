import { Category } from '@modules/cars/infra/typeorm/entities/Category';

import {
  ICategoriesRepository,
  // eslint-disable-next-line prettier/prettier
  ICreatedCategoryDTO
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
