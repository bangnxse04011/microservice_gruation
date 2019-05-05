import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import * as uuid from 'uuid';
import { Item } from '../module/item';
import { Product } from '../module/product';
import { ProductService } from '../service/product.service';
import { LaptopService } from '../service/laptop.service';
import { Laptop } from '../module/laptop';
import * as FPT from "../../environments/environment";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  // Create variable
  private IMAGES_SERVICE = FPT.environment.SERVICE;

  private json_Buy: any = [];
  private message: string = "";
  private cart_name: string = 'cart_buy_phone';
  private total_buy: number = 0;
  private items_buy: Item[] = [];
  // Variable get all list data student
  private listDataProduct: Product;
  private listDataProductlaptop: Laptop;
  private items_lap: Item[] = [];
  private total_lap: number = 0;
  // list product
  private list_Product: Array<String> = [];
  private storeData: Array<String> = [];
  private total_all;

  constructor(
    private router: ActivatedRoute,
    private routerParam: Router,
    private productService: ProductService,
    private laptopService: LaptopService,
  ) { }

  /**
   * 
   */
  calcAll() {
    this.total_all = this.total_buy + this.total_lap;
  }

  /**
   * Method load cart
   */
  loadCart(): void {
    this.load_cart_buy_phone();
    this.load_cart_buy_lap();
    this.calcAll();
    this.routerParam.navigate(['/product']);
  }

  /**
   * Method load cart buy
   */
  load_cart_buy_phone(): void {
    this.total_buy = 0;
    this.items_buy = [];
    let cart = JSON.parse(localStorage.getItem('cart_buy_phone'));
    if (cart != null) {
      for (var i = 0; i < cart.length; i++) {
        let item = JSON.parse(cart[i]);
        this.items_buy.push({
          product: item.product,
          date_exp: 0,
          quantity: item.quantity,
          date: item.date
        });
        this.total_buy += item.product.price * item.quantity;
      }
    }
    console.log(this.items_buy);
  }

  /**
   * Method load cart self
   */
  load_cart_buy_lap(): void {
    this.total_lap = 0;
    this.items_lap = [];
    let cart = JSON.parse(localStorage.getItem('cart_buy_lap'));
    if (cart != null) {
      for (var i = 0; i < cart.length; i++) {
        let item = JSON.parse(cart[i]);
        this.items_lap.push({
          product: item.product,
          date_exp: item.date_exp,
          quantity: item.quantity,
          date: item.date
        });
        this.total_lap += item.product.price * item.quantity;
      }
    }
    console.log(this.items_lap);
  }

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
      product_result => {
        if (product_result) {
          this.listDataProductlaptop = product_result;
          //-------------------------------------------
          var item: Item = {
            product: product_result,
            date_exp: 1,
            quantity: 1,
            date: ""
          };
          //-------------------------------------------
          if (localStorage.getItem('cart_buy_lap') == null) {
            let cart: any = [];
            cart.push(JSON.stringify(item));
            localStorage.setItem('cart_buy_lap', JSON.stringify(cart));
          } else {
            let cart: any = JSON.parse(localStorage.getItem('cart_buy_lap'));
            let index: number = -1;
            for (var i = 0; i < cart.length; i++) {
              let item: Item = JSON.parse(cart[i]);
              if (item.product.id == id) {
                index = i;
                break;
              }
            }
            if (index == -1) {
              cart.push(JSON.stringify(item));
              localStorage.setItem('cart_buy_lap', JSON.stringify(cart));
            } else {
              let item: Item = JSON.parse(cart[index]);
              let quantity_buy = +item.quantity;
              item.quantity = quantity_buy + 1;
              cart[index] = JSON.stringify(item);
              localStorage.setItem("cart_buy_lap", JSON.stringify(cart));
            }
          }
          this.loadCart();
        }
      });
  }

  /**
   * 
   * @param id 
   */
  remove(id: string, cart_details: any): void {
    let cart: any = JSON.parse(localStorage.getItem(this.cart_name));
    let index: number = -1;
    for (var i = 0; i < cart.length; i++) {
      let item: Item = JSON.parse(cart[i]);
      if (item.product.id == id) {
        cart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem(this.cart_name, JSON.stringify(cart));
    this.loadCart();
  }

  /**
   * Method find phone by id
   * @param id 
   */
  findPhoneById(id: any) {
    this.productService.findProductById(id).subscribe(
      product_result => {
        if (product_result) {
          this.listDataProduct = product_result;
          //-------------------------------------------
          var item: Item = {
            product: product_result,
            date_exp: 1,
            quantity: 1,
            date: ""
          };
          //-------------------------------------------
          if (localStorage.getItem('cart_buy_phone') == null) {
            let cart: any = [];
            cart.push(JSON.stringify(item));
            localStorage.setItem('cart_buy_phone', JSON.stringify(cart));
          } else {
            let cart: any = JSON.parse(localStorage.getItem('cart_buy_phone'));
            let index: number = -1;
            for (var i = 0; i < cart.length; i++) {
              let item: Item = JSON.parse(cart[i]);
              if (item.product.id == id) {
                index = i;
                break;
              }
            }
            if (index == -1) {
              cart.push(JSON.stringify(item));
              localStorage.setItem('cart_buy_phone', JSON.stringify(cart));
            } else {
              let item: Item = JSON.parse(cart[index]);
              let quantity_buy = +item.quantity;
              item.quantity = quantity_buy + 1;
              cart[index] = JSON.stringify(item);
              localStorage.setItem("cart_buy_phone", JSON.stringify(cart));
            }
          }
          this.loadCart();
        }
      });
  }

  ngOnInit() {
    let id = this.router.snapshot.paramMap.get('id');
    let category = this.router.snapshot.paramMap.get('category');
    if (category == "laptop") {
      this.findLapById(id);
    } else {
      this.findPhoneById(id);
    }
  }
}
