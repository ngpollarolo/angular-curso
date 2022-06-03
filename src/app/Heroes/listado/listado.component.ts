import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string [] = ['Spiderman','Ironman','Hulk','Thor'];
  heroeEliminado?: string = ''
  swprimero: number = 0 

  borrarHeroe() {
   
   //heroes.splice(3)
   // delete this.heroes[1]
    const heroeBorrado = this.heroes.shift() || '';
    this.heroeEliminado = heroeBorrado
    this.swprimero++
   console.log(heroeBorrado)
  }

  constructor() {
    console.log('constructor')
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('oninit')
  }
 }
