import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';
import { SpecificationsController } from './createSpecificationController';
import { CreateSpecificationsUseCase } from './CreateSpecificationUseCase';

const categoryRepository = SpecificationsRepository.getInstance();
const createSpecificationsUseCase = new CreateSpecificationsUseCase(
  categoryRepository,
);
const specificationsController = new SpecificationsController(
  createSpecificationsUseCase,
);

export { specificationsController };
