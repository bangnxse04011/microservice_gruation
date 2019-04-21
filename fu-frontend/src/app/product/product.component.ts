import { Component, OnInit } from '@angular/core';
import * as FPT from "../../environments/environment";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // Create variable
  private IMAGES_SERVICE = FPT.environment.SERVICE;

  constructor() { }

  ngOnInit() {
  }

}
