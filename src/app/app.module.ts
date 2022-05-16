import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from './app-routing-module';
import {ErrorPageComponent} from './error-page/error-page.component';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core.module';
import {shoppingListReducer} from './shopping-list/store/shopping-list.reducer';

@NgModule({
  declarations: [ // multiple declations of the same thing in different modules are not allow. but imports are allowed
    AppComponent,
    HeaderComponent,
    ErrorPageComponent,
  ],
  // if we have multiple modules, all other modules must be imported in the modules where they are used by the declared components, directives, pipes, etc,
  imports: [
    BrowserModule, // provides the ngIf and ngFor, and more. and can only be used in the app module. If you need to use a module with ngfor and ngIf in other modules then use CommonModule
    HttpClientModule, // http clientModule is also an exception, as it works like a service, it works application wide, it is fine in the app module
    AppRoutingModule,
    StoreModule.forRoot({shoppingList: shoppingListReducer}),
    // RecipesModule, // this is now loaded or imported via the app-routing.module lazy loading
    // ShoppingListModule,
    // AuthModule,
    SharedModule, // shared module imported in shopping and recipes modules and this is allowed. Declarations are not allowed
    CoreModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
