import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
// import {ErrorPageComponent} from './error-page/error-page.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  // lazy loading - only load a module that you need, depending on the parth
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  {path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'},
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'}
  // {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
  // {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  // preloadStratragy used here means the initial download of modules will be of recipes,
  // then as the user browsers the app, the browser downloads the other modules so when they are needed they are already downloaded
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
