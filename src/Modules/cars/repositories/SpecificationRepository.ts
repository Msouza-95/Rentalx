import { Specification } from '../model/Specification';
import {
  ICreateSpecificationDTOS,
  ICreateSpecificationRepository
} from './implemetantions/ICreateSpecificationRepository';

class SpecificationRepository implements ICreateSpecificationRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDTOS): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      specification => specification.name === name
    );

    return specification;
  }
}

export { SpecificationRepository };
