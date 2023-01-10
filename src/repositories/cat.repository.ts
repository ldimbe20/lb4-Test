import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Cat, CatRelations} from '../models';

export class CatRepository extends DefaultCrudRepository<
  Cat,
  typeof Cat.prototype.id,
  CatRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Cat, dataSource);
  }
}
