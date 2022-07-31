import { Category } from '../models/Category';
import {
  ICategoriesRepository,
  ICreatedCategoryDTO,
} from './ICategoriesRepository';

export class PostGressRepositoryCategory implements ICategoriesRepository {
  create({ nameCategory, description }: ICreatedCategoryDTO): void {
    console.log(nameCategory, description);
  }
  list(): Category[] {
    return null;
  }
  findByName(nameCategory: string): Category {
    console.log(nameCategory);
    return null;
  }
}
