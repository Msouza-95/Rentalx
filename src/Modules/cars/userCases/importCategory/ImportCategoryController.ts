import { Request, Response } from 'express';

import { ImportCategoryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {
  constructor(private importeCategoryUseCase: ImportCategoryUseCase) {}
  handle(resquet: Request, response: Response): Response {
    const { file } = resquet;
    this.importeCategoryUseCase.execute(file);
    return response.send('foi');
  }
}

export { ImportCategoryController };
