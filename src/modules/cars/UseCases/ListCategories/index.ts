import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';
import { ListCategoryController } from './ListCategoryController';

const categoryRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository);
const listCategoriesController = new ListCategoryController(
  listCategoriesUseCase,
);

export { listCategoriesController };
