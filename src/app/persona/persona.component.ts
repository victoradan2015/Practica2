import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import {PERSONAS} from '../listas/listas'

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  // Persona:Persona[] = [];
  
  // constructor() { }

  // ngOnInit(): void {
  //   this.Persona = [{ edad: 20, sexo: "h", nombre: "juan", apellido: "Gonzales" }, { edad: 30, sexo: "m", nombre: "maria", apellido: "matias" }];
  // }

  // OP = null;
  // onClick(Persona) { this.Persona = Persona };

  show:boolean=true;

  lista : Persona = {
    id:1,
    nombre:"",
    apellido: '',
    edad: 0,
    sexo: ''
  }
  
  listas = PERSONAS;

  selectedHeroe: Persona;
onSelect(lista: Persona): void {
  this.selectedHeroe = lista;
}

  constructor() { }

  ngOnInit(): void {
  }

  miEvento(): void {
    console.log("Se dio un click")
  }
}

