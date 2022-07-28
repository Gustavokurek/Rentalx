import { Router } from 'express';

const categoriesRoute = Router();

const categories = [];
categoriesRoute.post('/categories', (req, res) => {
  const { nameCategory, description } = req.body;

  categories.push({
    nameCategory,
    description,
  });

  return res.status(201).json({ msg: 'category create' });
});

export { categoriesRoute };
