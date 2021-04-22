import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';
import { ListCategoryController } from './ListCategoryController';

const categoriesRepository = CategoriesRepository.getInstace();
const listCategoreiesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoryController = new ListCategoryController(
  listCategoreiesUseCase
);

export { listCategoryController };
