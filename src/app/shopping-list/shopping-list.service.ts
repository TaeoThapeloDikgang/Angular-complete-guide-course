import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class ShoppingListService {

  // this is what we had at first. If EventEmitter is used with services or to communicate
  // across components and not annoted with @Output, we need to use subject coz they efficient
  // ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientsChanged = new Subject<Ingredient[]>();

  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    // if we omit the code below, then our ingredients in the shopping list ngOnInit will always reflect
    // the copy of the original array. Remember ngOnInit only runs once.
    // one solution is to use an emitter an subcribe in the ngOnInit to always listen for changes to the  array
    // another simple solution is to return this.ingredients without the slice() in the get method above.
    // adding the code to the onChanges doesnt work, im not sure why that is not a solution.
    // onChanges doesnt work because the changes(event emitted) happens in shopping-edit component
    // it doesnt work because the data that is changed belongs to the service not the component with ngOnChanges
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (const ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    // The method above will work but cause a lot of emissions - not efficient

    this.ingredients.push(...ingredients);
    // the push method can handle multiple items, e.g. push(1,2,3) but if we push([1,2,3]) it will push it as a single object
    // what we want is to append an array to another array. resulting in one uniform array.
    // to achieve that we need to use ... esx feature, the spread operator.

    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
