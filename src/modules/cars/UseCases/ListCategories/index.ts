import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { ListCategoryController } from './ListCategoryController';
import { ListCategoriesUseCase } from './ListCategoryUseCase';

const categoryRepository = new CategoriesRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository);
const listCategoryController = new ListCategoryController(
  listCategoriesUseCase,
);

export { listCategoryController };
