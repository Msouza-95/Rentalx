import { Router } from 'express';

import { SpecificationRepository } from '../Modules/cars/repositories/SpecificationRepository';
import { CreateSpecificationService } from '../Modules/cars/services/CreateSpecificationService';

const specificationRoutes = Router();

const specificationRepository = new SpecificationRepository();

specificationRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationRepository
  );
  createSpecificationService.execute({ name, description });
  return response.status(201).send();
});

export { specificationRoutes };