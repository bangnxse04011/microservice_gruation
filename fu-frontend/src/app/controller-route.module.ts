import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from "../app/product/product.component";
import { DetailsComponent } from "../app/details/details.component";
import { OrderComponent } from "../app/order/order.component";
import { OrderDetailsComponent } from "../app/order-details/order-details.component";

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
  },
  {
    path: 'order/:id/:category',
    component: OrderComponent
  },
  {
    path: 'order',
    component: OrderDetailsComponent
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
