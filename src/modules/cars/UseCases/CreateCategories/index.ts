import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { CategoriesController } from './createCategoryController';
import { CreateCategoriesUseCase } from './CreateCategoryUseCase';

const categoryRepository = CategoriesRepository.getInstance();
const createCategoriesUseCase = new CreateCategoriesUseCase(categoryRepository);
const categoriesController = new CategoriesController(createCategoriesUseCase);

export { categoriesController };
