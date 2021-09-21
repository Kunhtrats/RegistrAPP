import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';
import { Router } from '@angular/router';
import { Persona } from '../persona.model';
import {AlertController} from '@ionic/angular';


@Component({
  
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})
export class IngresarPage implements OnInit 
{
  persona : Persona
  constructor
  (
    private alertController: AlertController,
    private personasService : PersonasService,
    private router          : Router, 
  ) 
  { 
  }

  ngOnInit() 
  {
  }

  public datauser: string = "";
  public datapass: string = "";

  async ingresar()
  {
    if (this.datauser === "mi.alarconr" && this.datapass == "1234") 
    {
      this.router.navigate(['/lobby']);
      const alert = await this.alertController.create({
        header: 'Bienvenido usuario',
        message: this.datauser,
        buttons: ['Aceptar']
      });
      await alert.present();
      
    }
    else if (this.datauser === "va.muñoz" && this.datapass == "123")
    {
      this.router.navigate(['/lobby']);
      const alert = await this.alertController.create({
        header: 'Bienvenido usuario',
        message: this.datauser,
        buttons: ['Aceptar']
      });
      await alert.present();
    }
    else 
      {
        const alert = await this.alertController.create({
          header: 'Credenciales incorrectas',
          message: 'Los datos ingresados son incorrectos',
          buttons: ['Aceptar']
        });
        await alert.present();
        this.router.navigate(['/ingresar']);
      }
    }

  recover() 
  {
    this.router.navigate(['/recover-pass']);
  }
}

