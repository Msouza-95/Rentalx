import { Router } from 'express';

import { createCategoryController } from '../Modules/cars/userCases/createCategory';
import { listCategoryController } from '../Modules/cars/userCases/listCategory';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  return listCategoryController.handle(request, response);
});

export { categoriesRoutes };
