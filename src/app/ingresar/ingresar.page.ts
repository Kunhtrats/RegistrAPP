import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})
export class IngresarPage implements OnInit {

  constructor(private personasService : PersonasService,
              private router : Router        
    ) { }

  ngOnInit() 
  {
  }
  ingresar(user :HTMLInputElement, password :HTMLInputElement)
  {
    const use = user.value;
    const pass = password.value;
    this.personasService.loginUser(use, pass);
    this.router.navigate(['/lobby']);
  }
  recover() 
  {
    this.router.navigate(['/recover-pass']);
  }
  
  
}
