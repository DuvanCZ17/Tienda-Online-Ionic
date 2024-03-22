import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Product, ProductsService } from '../services/products.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class MainPage implements OnInit {
  total: number = 0;
  products: Product[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.products.subscribe(products =>{
      this.products = products;
      this.cartService.products.pipe(map(products =>{
        return products.reduce((prev, curr)=>prev + curr.price, 0)
      })).subscribe(val =>{
        this.total = val;
      })
    })
  }

  onClickDelete(indice: number){
    this.cartService.deleteProduct(indice);
  }
}
