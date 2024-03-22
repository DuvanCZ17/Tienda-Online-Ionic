import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertController, IonicModule, NavController } from '@ionic/angular';
import { FormGroup, FormControl,Validators, FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, RouterLink]
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup ;
  constructor(public fb:FormBuilder, public alertController: AlertController, public navCtrl: NavController) { 
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }

  async ingresar(){
    var f = this.formularioLogin.value;

    var usuarioString = localStorage.getItem('usuario');
    var usuario = usuarioString ? JSON.parse(usuarioString) : null;

    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('Ingresado');
      this.navCtrl.navigateRoot('lista-productos')
      const alert = await this.alertController.create({
        header: 'Bienvenido',
        message: 'Sesion iniciada correctamente',
        buttons: ['Aceptar']
      })
  
      await alert.present();
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'El correo o la contraseña no corresponden',
        buttons: ['Aceptar']
      })
  
      await alert.present();
    }
  }
}
