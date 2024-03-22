import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormGroup, FormControl,Validators, FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular/standalone';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup ;
  constructor(public fb:FormBuilder, public alertController: AlertController) { 
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required),
    })
  }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }else {
      const alert = await this.alertController.create({
        header: 'Felicidades',
        message: 'Registro Completo',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      
    }

    var usuario = {
      nombre: f.nombre,
      password: f.password
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));
  }
}
