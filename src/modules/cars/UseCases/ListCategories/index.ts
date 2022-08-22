import { ListCategoriesUseCase } from './ListCategoriesUseCase';
import { ListCategoryController } from './ListCategoryController';

const categoryRepository = null;
const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository);
const listCategoriesController = new ListCategoryController(
  listCategoriesUseCase,
);

export { listCategoriesController };
