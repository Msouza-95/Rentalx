import { Router } from 'express';

import { createSpecificationController } from '../Modules/cars/userCases/createSpecification';

const specificationRoutes = Router();

specificationRoutes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response);
});

export { specificationRoutes };
