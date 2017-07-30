import { 
  Directive, 
  Component, 
  ComponentFactory, 
  OnChanges, 
  Input, 
  ViewContainerRef,
  Compiler,
  ComponentFactoryResolver,
  Type
 } from '@angular/core';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'dynamic',
  template: ''
})
export class DynamicDirective implements OnChanges {
  @Input() comp: string;
  componentRef;
  factories;

  constructor(
    private vcRef: ViewContainerRef, 
    private resolver: ComponentFactoryResolver) {
    this.factories = Array.from(this.resolver['_factories'].keys());
  }

  ngOnChanges() {
    if (!this.comp) return;
    
    var factoryClass = <Type<any>>this.factories.find((x: any) => x.name === this.comp);
    const factory = this.resolver.resolveComponentFactory(factoryClass);
    const compRef = this.vcRef.createComponent(factory);



    if (this.componentRef) {
      this.componentRef.destroy();
    }

    this.componentRef = compRef;
  }
  
  public ngOnDestroy(){
    if (this.componentRef) {
        this.componentRef.destroy();
        this.componentRef = null;
    }
  }
}

