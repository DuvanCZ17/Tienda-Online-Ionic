import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Product, ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class ProductListPage implements OnInit {

  products: Product[] = [];
  productService = inject(ProductsService)

  constructor( private cartService: CartService) { }

  async ngOnInit() {
    const response = await this.productService.getAll();
    this.products = response.results;
  }

  onClick (product: Product){
    this.cartService.addNewProduct(product)
  }
}
