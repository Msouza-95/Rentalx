import { ICategoriesRepository } from '../../repositories/implemetantions/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoryRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists!');
    }
    this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
