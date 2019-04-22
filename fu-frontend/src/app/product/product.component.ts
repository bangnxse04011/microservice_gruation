import { Component, OnInit } from '@angular/core';
import * as FPT from "../../environments/environment";
import { ProductService } from "../service/product.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from "../module/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // Create variable
  private IMAGES_SERVICE = FPT.environment.SERVICE;
  // Variable get all list data product
  list_Data_Product: Product[];

  constructor(private productService: ProductService,
    private router: Router,
    private location: Location) { }

  /**
   * Method find all product call method in product service
  */
  find_Product() {
    this.productService.find_Product_Data().subscribe(
      product => {
        console.log(product);
        this.list_Data_Product = product;
      });
  }

  ngOnInit() {
    this.find_Product();
  }

}
