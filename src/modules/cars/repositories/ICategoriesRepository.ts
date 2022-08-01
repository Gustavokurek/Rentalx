import { Category } from '../models/Category';

export interface ICreatedCategoryDTO {
  nameCategory: string;
  description: string;
}
export interface ICategoriesRepository {
  create({ nameCategory, description }: ICreatedCategoryDTO): void;
  list(): Category[];
  findByName(nameCategory: string): Category;
}
