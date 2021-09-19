import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private personas : Persona[] = [
    {
      user    : 'mi.alarcon',
      password: '2001'
    },
    {
      user    : 'he.vergara',
      password: '2008'
    },
    {
      user    : 'ka.alarcon',
      password: '2000'
    }
  ]


  constructor() { }

// CRUD
  getPersonas()
  { // devuelve todos las personas de la lista
    return this.personas
  }
  addPersona(user: string, password: string)
  { // agrega a una nueva persona
    this.personas.push(
      {
        user    : user,
        password: password
      }
    )
  }
}
