import {NgModule} from '@angular/core';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {RecipeService} from './recipes/recipe.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptorService} from './auth/auth-interceptor.service';

// This is used for only core services if the services are provided in the app module. but if the services are added via providedInRoot then you dont have to use core modules
// in fact providedIn Root is more recommended
@NgModule({
  providers: [ // you dont need to export services. Only declaration need to be exported
    ShoppingListService,
    RecipeService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ]
})
export class CoreModule {}
