import 'reflect-metadata';
import { container } from 'tsyringe';

import '@shared/container/providers/';

import { UserRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepositories';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepositories';
import { CarsImagesRepository } from '@modules/cars/infra/typeorm/repositories/CarsImagesRepository';
import { CarsRepository } from '@modules/cars/infra/typeorm/repositories/CarsRepository';
import { CategoriesRepository } from '@modules/cars/infra/typeorm/repositories/CategoriesRepository';
import { SpecificationsRepository } from '@modules/cars/infra/typeorm/repositories/SpecificationsRepository';
import { ICarsImageRepository } from '@modules/cars/repositories/ICarsImageRepository';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';
import { RentalsRepository } from '@modules/Rentals/infra/typeorm/repositories/RentalsRepository';
import { IRentalRepository } from '@modules/Rentals/repositories/IRentalRepository';

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

// cars

container.registerSingleton<ICarsRepository>('CarsRepository', CarsRepository);

container.registerSingleton<ICarsImageRepository>(
  'CarsImagesRepository',
  CarsImagesRepository,
);

// rentals

container.registerSingleton<IRentalRepository>(
  'RentalsRepository',
  RentalsRepository,
);
