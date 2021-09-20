import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.page.html',
  styleUrls: ['./lobby.page.scss'],
})
export class LobbyPage implements OnInit {
  personas: import("d:/Tools/Archivos Personales/Visual Studio Code/PGY4121/src/app/persona.model").Persona[];

  constructor(private personasServicio: PersonasService, private router: Router) { }

  ngOnInit() 
  {
    this.personas = this.personasServicio.getUsers();
  }
  ionViewWillEnter() 
  {
    this.personas = this.personasServicio.getUsers();
  }
  settings()
  {
    this.router.navigate(['/lobby-settings']);  
  }
  qr()
  {
    this.router.navigate(['/qr-page']);  
  }
  noOfItem = 1
  
  
}
