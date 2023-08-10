import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[productCheckoutHost]'
})
export class ProductCheckoutDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}