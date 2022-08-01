import { Router } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationsService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRoute = Router();
const specificationsRepository = new SpecificationsRepository();
const specificationsCreate = new CreateSpecificationsService(
  specificationsRepository,
);

specificationsRoute.post('/', (req, res) => {
  const { nameSpecification, description } = req.body;
  specificationsCreate.execute({ nameSpecification, description });

  return res.status(201).json();
});

specificationsRoute.get('/', (req, res) => {
  const all = specificationsRepository.list();
  return res.json(all);
});

export { specificationsRoute };
