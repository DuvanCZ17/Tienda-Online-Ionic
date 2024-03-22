import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'lista-productos', loadComponent: () => import('./product-list/product-list.page').then( m => m.ProductListPage)
  },
  {path : 'carrito', loadComponent: ()=> import('./main/main.page').then(m => m.MainPage)},
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'registro',
    loadComponent: () => import('./registro/registro.page').then( m => m.RegistroPage)
  }

];
