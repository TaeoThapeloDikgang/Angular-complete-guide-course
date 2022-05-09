import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appPlaceholder]'
})
export class PlaceholderDirective {

  // ViewContainerRef give gives angular the coordinates of where to interact with template (html).
  // In addition, it gives angular the ability to add a new component there.
  // had we used the normal template reference e.g <dive #addHere></dive>. Angular would get the coordinates in the dom but would not be able to add anything there.
  // hence we need a directive to use like <ng-template appPlaceholder>
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
