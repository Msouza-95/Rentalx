import { Specification } from '../model/Specification';

interface ICreateSpecificationDTOS {
  name: string;
  description: string;
}

interface ICreateSpecificationRepository {
  create(data: ICreateSpecificationDTOS): void;
  findByName(name: string): Specification;
}

export { ICreateSpecificationRepository, ICreateSpecificationDTOS };
