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
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  // Create variable
  private IMAGES_SERVICE = FPT.environment.SERVICE;

  private total_buy: number = 0;
  private items_buy: Item[] = [];
  // Variable get all list data student
  private items_lap: Item[] = [];
  private total_lap: number = 0;
  // list product
  private total_all = 0;
  private cart_name = "cart_buy_phone";
  constructor() { }

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
        this.total_buy += item.product[0].phonePrice * item.quantity;
      }
    }
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
  }

  /**
 * 
 * @param id 
 */
  remove(id: string, cart_details: any): void {
    if (cart_details == 1 || cart_details == '1') {
      this.cart_name = 'cart_buy_lap';
    }
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

  ngOnInit() {
    this.loadCart();
  }

}
