import { Router } from 'express';
import { Categories } from '../models/Categories';

const categoriesRoute = Router();

const categories: Categories[] = [];
categoriesRoute.post('/', (req, res) => {
  const { nameCategory, description } = req.body;
  const category = new Categories();
  Object.assign(category, {
    nameCategory,
    description,
    created_at: new Date(),
  });
  categories.push(category);

  return res.status(201).json(categories);
});

export { categoriesRoute };
