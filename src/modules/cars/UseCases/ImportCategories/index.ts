import { ImportCategoriesController } from './ImportCategoriescontroller';
import { ImportCategoriesUseCase } from './ImportCategoriesUseCase';

const categoriesRepository = null;
const importCategoriesUseCase = new ImportCategoriesUseCase(
  categoriesRepository,
);
const importCategoriesController = new ImportCategoriesController(
  importCategoriesUseCase,
);

export { importCategoriesController };
