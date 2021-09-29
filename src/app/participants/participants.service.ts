import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {
  getParticipants(){
      return [
          {name: "Faith Marie Sampaguita", age:23 + " years old", gender: "Female"},
          {name: "Michael Dina Makita", age:45 + " years old", gender: "Male"},
          {name: "John Mananabas", age:50 + " years old", gender: "Male"},
          {name: "Sagpa Escabeche", age:27 + " years old", gender: "Male"},
          {name: "Jelian Joy Sagpang", age:21 + " years old", gender: "Female"},
          {name: "Veronica Gonzales", age:34 + " years old", gender: "Male"},
          {name: "Ponz Hernandez", age:40 + " years old", gender: "Male"},
          {name: "Marry Jean Perez", age:27 + " years old", gender: "Female"},
          {name: "Marry Ann Perez", age:20 + " years old", gender: "Female"},
          {name: "Cedric Rosales", age:29 + " years old", gender: "Male"},
          {name: "Mark Jeffrey Fredrick", age:28 + " years old", gender: "Male"},
      ];
  }
}
