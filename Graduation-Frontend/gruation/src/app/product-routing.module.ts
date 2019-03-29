import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from "./product/product.component"

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

export class ProductRoutingModule { }
