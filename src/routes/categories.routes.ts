import { Router } from 'express';

import { CategoriesRepository } from '../Modules/cars/repositories/CategoriesRepository';
import { CreateCategoryServices } from '../Modules/cars/services/CreateCategoryService';

const categoriesRoutes = Router();

const categoryRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryServices(categoryRepository);

  createCategoryService.execute({ name, description });
  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const categories = categoryRepository.list();
  return response.status(401).json(categories);
});

export { categoriesRoutes };
