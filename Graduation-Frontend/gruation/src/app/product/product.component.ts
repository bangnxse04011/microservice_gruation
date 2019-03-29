import { Component, OnInit } from '@angular/core';
import { SmartphoneService } from "../smartphone.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private smartphoneService: SmartphoneService,
    private router: Router,
    private location: Location) { }

  /**
   * Method find all smart phone
   */
  find_all() {
    this.smartphoneService.find_all_prouduct_smart_phone().subscribe(
      smartPhone => {
        if (smartPhone) {
          console.log(smartPhone);
        }
      }
    );
  }

  ngOnInit() {
    console.log("a1111");
    this.find_all();
  }

}
