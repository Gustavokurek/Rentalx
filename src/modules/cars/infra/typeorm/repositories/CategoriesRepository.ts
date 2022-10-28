import { getRepository, Repository } from 'typeorm';

import {
  ICategoriesRepository,
  // eslint-disable-next-line prettier/prettier
  ICreatedCategoryDTO
} from '@modules/cars/repositories/ICategoriesRepository';

import { Category } from '../entities/Category';

export class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({
    nameCategory,
    description,
  }: ICreatedCategoryDTO): Promise<void> {
    const category = await this.repository.create({
      nameCategory,
      description,
    });
    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const list = this.repository.find();
    return list;
  }

  async findByName(nameCategory: string): Promise<Category> {
    const category = this.repository.findOne({ nameCategory });
    return category;
  }
}
