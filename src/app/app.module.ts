import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicDirective } from './dynamic.directive';
import { PlaceholderComponents } from './component.map';

@NgModule({
  declarations: [
    AppComponent,
    PlaceholderComponents,
    DynamicDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ 
    PlaceholderComponents
  ]
})
export class AppModule { }
