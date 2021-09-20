import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../persona.model';
import {PersonasService} from '../personas.service';
import { AlertController } from '@ionic/angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-lobby-settings',
  templateUrl: './lobby-settings.page.html',
  styleUrls: ['./lobby-settings.page.scss'],
})
export class LobbySettingsPage implements OnInit {

  persona : Persona

  constructor(
    private activatedRouter : ActivatedRoute,
    private personasService : PersonasService,
    private router          : Router,
    private alertController : AlertController) { }

  ngOnInit() 
  {    
  }
  home()
  {
    this.router.navigate(['/home']);
}
}
