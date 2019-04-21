import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ControllerRouteModule } from './controller-route.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    ControllerRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
