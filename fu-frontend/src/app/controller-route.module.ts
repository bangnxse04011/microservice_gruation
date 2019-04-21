import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from "../app/product/product.component";

// Variable config routers.
const router: Routes = [
  {
    path: '',
    redirectTo: '/product',
    pathMatch: 'full'
  },
  {
    path: 'product',
    component: ProductComponent
  }
];

@NgModule({
  imports: [
    // CommonModule
    RouterModule.forRoot(router)
  ],
  // declarations: []
  exports: [RouterModule]
})

export class ControllerRouteModule { }
