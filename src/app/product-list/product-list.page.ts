import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
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

  constructor( private cartService: CartService, public alertController: AlertController) { }

  async ngOnInit() {
    const response = await this.productService.getAll();
    this.products = response.results;
  }

  async onClick (product: Product){
    this.cartService.addNewProduct(product)
    const alert = await this.alertController.create({
      header: 'Felicidades',
      message: 'Producto agregado correctamente',
      buttons: ['Aceptar']
    })

    await alert.present();
  }
}
