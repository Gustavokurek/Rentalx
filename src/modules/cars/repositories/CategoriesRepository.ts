import { Category } from '../models/Category';
import {
  ICategoriesRepository,
  ICreatedCategoryDTO,
} from './ICategoriesRepository';

export class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];
  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: CategoriesRepository;
  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
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
