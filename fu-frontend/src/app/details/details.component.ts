import { Component, OnInit } from '@angular/core';
import * as FPT from "../../environments/environment";
import { ProductService } from "../service/product.service";
import { LaptopService } from "../service/laptop.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from "../module/product";
import { Laptop } from "../module/laptop";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  // Create variable
  private IMAGES_SERVICE = FPT.environment.SERVICE;
  // Variable get all list data product
  listDataProduct: Product;
  listDataProductlaptop: Laptop;

  constructor(private productService: ProductService,
    private laptopService: LaptopService,
    private router: ActivatedRoute,
    private location: Location) { }

  findId() {
    let id = this.router.snapshot.paramMap.get('id');
    let category = this.router.snapshot.paramMap.get('category');
    if (category == "laptop") {
      this.findLapById(id);
    } else {
      this.findPhoneById(id);
    }
  }

  /**
   * Method find lap by id
   * @param id 
   */
  findLapById(id: any) {
    this.laptopService.findProductById(id).subscribe(
      product => {
        if (product) {
          console.log(product);
          this.listDataProductlaptop = product;
        }
      });
  }

  /**
   * Method find phone by id
   * @param id 
   */
  findPhoneById(id: any) {
    this.productService.findProductById(id).subscribe(
      product => {
        if (product) {
          console.log(product);
          this.listDataProduct = product;
        }
      });
  }

  addToCard(id, name) {
    alert(id + " " + name);
  }

  ngOnInit() {
    this.findId();
  }

}
