import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from "../app/product/product.component";
import { DetailsComponent } from "../app/details/details.component";

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
  },
  {
    path: 'details/:id/:category',
    component: DetailsComponent
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
