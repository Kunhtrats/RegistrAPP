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
    }
  ]
  constructor() { }

}
