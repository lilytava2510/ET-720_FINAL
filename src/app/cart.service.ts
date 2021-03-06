import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CartService {
  items = [];

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
  getGraphicDesignPortfolio() {
    return this.http.get('/assets/graphic.json');
  }
  getDigitalArtPortfolio() {
    return this.http.get('/assets/digital.json');
  }

  getPortfolio(_file) {
    return this.http.get(_file);
  }

  constructor(
    private http: HttpClient
  ) { }

}