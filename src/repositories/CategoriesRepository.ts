import { Category } from '../models/Category';
import {
  ICategoriesRepository,
  ICreatedCategoryDTO,
} from '../repositories/ICategoriesRepository';

export class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];
  constructor() {
    this.categories = [];
  }

  create({ nameCategory, description }: ICreatedCategoryDTO) {
    const category = new Category();
    Object.assign(category, {
      nameCategory,
      description,
      created_at: new Date(),
    });
    this.categories.push(category);
  }

  list(): Category[] {
    const list = this.categories;
    return list;
  }

  findByName(nameCategory: string): Category {
    const category = this.categories.find(
      (category) => category.nameCategory === nameCategory,
    );
    return category;
  }
}
