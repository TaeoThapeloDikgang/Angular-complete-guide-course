import {NgModule} from '@angular/core';
import {AlertComponent} from './alert/alert.component';
import {LoadingSpinnerComponent} from './loading-spinner/loading-spinner.component';
import {PlaceholderDirective} from './placeholder.directive';
import {DropdownDirective} from './dropdown.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
    CommonModule
  ],
  entryComponents: [
    AlertComponent
    // when angular loads at first it goes to the template and if finds a component selector it goes to the app.module.ts to check if that component has been declared if yes then it creates that component
    // another place it looks in is the app-routing-module.ts, it reads the component declared in the path then goes to the app.module to check if they are there before it creates them.
    // angular 9 and below do not look for component declared programatically e.g. AlertComponet . You need to add it manually to entryComponent
  ]

})
export class SharedModule {}
