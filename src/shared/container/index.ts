import { container } from 'tsyringe';

import { UserRepository } from '@modules/accounts/repositories/implementations/UsersRepositories';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepositories';
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from '@modules/cars/repositories/implementations/CategoriesRepository';
import { SpecificationsRepository } from '@modules/cars/repositories/implementations/SpecificationsRepository';
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';

// IcategoriesRepository
container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);
container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);

// users

container.registerSingleton<IUsersRepository>('UserRepository', UserRepository);
