import { Category } from '../entities/Category';

export interface ICreatedCategoryDTO {
  nameCategory: string;
  description: string;
}
export interface ICategoriesRepository {
  create({ nameCategory, description }: ICreatedCategoryDTO): Promise<void>;
  list(): Promise<Category[]>;
  findByName(nameCategory: string): Promise<Category>;
}
