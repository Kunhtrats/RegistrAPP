import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';
import { Router } from '@angular/router';
import { Persona } from '../persona.model';


@Component({
  
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})
export class IngresarPage implements OnInit {
  persona : Persona
  constructor
  (
    private personasService : PersonasService,
    private router          : Router, 
  ) 
  { 
  }

  ngOnInit() 
  {
  }

  datauser: string = "";
  datapass: string = "";

  ingresar()
  {
    if (this.datauser === "mi.alarconr" && this.datapass == "1234") 
      {
        this.router.navigate(['/lobby']);
      } 
      else 
      {
        this.router.navigate(['/home']);
      }
  }
  

  recover() 
  {
    this.router.navigate(['/recover-pass']);
  }
}

