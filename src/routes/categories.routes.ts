import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoute = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoute.post('/', (req, res) => {
  const { nameCategory, description } = req.body;

  const categoryAlreadyExists = categoriesRepository.findByName(nameCategory);
  if (categoryAlreadyExists) {
    return res.status(400).json({ error: 'category already exists' });
  }

  categoriesRepository.create({ nameCategory, description });

  return res.status(201).json();
});

categoriesRoute.get('/', (req, res) => {
  const all = categoriesRepository.list();
  return res.json(all);
});

export { categoriesRoute };
