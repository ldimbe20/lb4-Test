import {Entity, model, property} from '@loopback/repository';

@model()
export class Habit extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'number',
  })
  count?: number;


  constructor(data?: Partial<Habit>) {
    super(data);
  }
}

export interface HabitRelations {
  // describe navigational properties here
}

export type HabitWithRelations = Habit & HabitRelations;
