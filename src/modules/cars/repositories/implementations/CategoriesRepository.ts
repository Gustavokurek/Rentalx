import { getRepository, Repository } from 'typeorm';

import { Category } from '../../entities/Category';
import {
  ICategoriesRepository,
  ICreatedCategoryDTO,
} from '../ICategoriesRepository';

export class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;
  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: CategoriesRepository;
  private constructor() {
    this.repository = getRepository(Category);
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
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
