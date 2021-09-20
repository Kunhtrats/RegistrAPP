import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private personas : Persona[] = [
  ]
  getUser: any;
  constructor() { }

  loginUser(user: string, password: string)
  {
    this.personas.push(
      {
        user     : user,
        password : password,
      }
    )
  }
  getUsers()
  {
    return this.personas
  }

  deleteUser(i, user) {
    this.personas.splice(i, user);
  }
}
