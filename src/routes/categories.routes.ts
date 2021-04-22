import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../Modules/cars/userCases/createCategory';
import { importCategoryController } from '../Modules/cars/userCases/importCategory';
import { listCategoryController } from '../Modules/cars/userCases/listCategory';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tnp'
});

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  return listCategoryController.handle(request, response);
});

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
