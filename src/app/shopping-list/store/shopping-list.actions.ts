import {Action} from '@ngrx/store';
import {Ingredient} from '../../shared/ingredient.model';


export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngredient implements Action {
  // only type is enforced by Action interface
  readonly type = ADD_INGREDIENT;

  constructor(public payload: Ingredient) {
  }
}
