import { response, Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();

const categoryRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoryRepository.findByName(name);

  if (categoryAlreadyExists) {
    return response.send({ Message: 'Category Exists' });
  }
  categoryRepository.create({ name, description });
  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const categories = categoryRepository.list();
  return response.status(401).json(categories);
});

export { categoriesRoutes };
