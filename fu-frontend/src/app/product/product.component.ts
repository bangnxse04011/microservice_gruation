import { Component, OnInit } from '@angular/core';
import * as FPT from "../../environments/environment";
import { ProductService } from "../service/product.service";
import { LaptopService } from "../service/laptop.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from "../module/product";
import { Laptop } from "../module/laptop";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // Create variable
  private IMAGES_SERVICE = FPT.environment.SERVICE;
  // Variable get all list data product
  listDataProduct: Product[];
  listDataProductlaptop: Laptop[];

  constructor(private productService: ProductService,
    private laptopService: LaptopService,
    private router: Router,
    private location: Location) { }

  /**
   * Method find all product call method in product service
  */
  find_Product() {
    this.productService.findProductData().subscribe(
      product => {
        this.listDataProduct = product;
      });
  }

  find_Laptop() {
    this.laptopService.findLaptopData().subscribe(
      product => {
        this.listDataProductlaptop = product;
      });
  }

  init() {
    this.find_Product();
    this.find_Laptop();
  }

  ngOnInit() {
    this.init();
  }

}
