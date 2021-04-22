import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

const categoriesRepositoy = CategoriesRepository.getInstace();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepositoy);
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);

export { importCategoryController };
