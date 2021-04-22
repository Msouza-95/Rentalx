import { Request, Response } from 'express';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoryController {
  constructor(private listCategoreUseCase: ListCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const categories = this.listCategoreUseCase.execute();

    return response.status(201).json(categories);
  }
}

export { ListCategoryController };
