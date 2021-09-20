import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recover-pass',
  templateUrl: './recover-pass.page.html',
  styleUrls: ['./recover-pass.page.scss'],
})
export class RecoverPASSPage implements OnInit {

  constructor(
    private activatedRouter : ActivatedRoute,
    private router          : Router,
    private alertController : AlertController) { }

  ngOnInit() {
  }

  async recover()
  {

    const alertElement = await this.alertController.create({
      header  : "Mensaje",
      message : "Se a enviado un correo de recuperación",
      buttons : [
        {
          text  : "Volver",
          handler: () => {
            this.router.navigate(['/ingresar']);
          }
        }
      ]
    })
    await alertElement.present();
  }
}
