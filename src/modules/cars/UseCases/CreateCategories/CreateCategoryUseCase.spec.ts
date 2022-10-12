import { AppError } from '../../../../errors/appError';
import { CategoryRepositoryInMemory } from '../../repositories/in-memory/CategoryRepositoryInMemory';
import { CreateCategoriesUseCase } from './CreateCategoryUseCase';

describe('Create a new Category', () => {
  let createCategoryUseCase: CreateCategoriesUseCase;
  let categoryRepositoryInMemory: CategoryRepositoryInMemory;
  let category: { nameCategory: string; description: string };

  beforeEach(() => {
    categoryRepositoryInMemory = new CategoryRepositoryInMemory();
    createCategoryUseCase = new CreateCategoriesUseCase(
      categoryRepositoryInMemory,
    );
    category = {
      nameCategory: 'Teste_name',
      description: 'teste_description',
    };
  });

  it('should be able create a new category', async () => {
    await createCategoryUseCase.execute(category);
    const categoryCreated = await categoryRepositoryInMemory.findByName(
      category.nameCategory,
    );
    console.log(categoryCreated);

    expect(categoryCreated).toHaveProperty('id');
  });

  it('should not be able create a new category witch a name exists ', async () => {
    expect(async () => {
      await createCategoryUseCase.execute(category);
      await createCategoryUseCase.execute(category);
    }).rejects.toBeInstanceOf(AppError);
  });
});
