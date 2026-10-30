import { Component, inject, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { SillasData } from '../sillas-data';
import { FormsModule } from '@angular/forms';
import { Silla } from '../silla';

@Component({
  imports: [NgFor, FormsModule, NgIf],
  selector: 'app-sillas',
  styleUrl: './sillas.css',
  templateUrl: './sillas.html',
})
export class Sillas {

  sillas = signal<Silla[]>([]);
  rand = 0;
  sillasData = inject(SillasData);

  public titulo = 'Sillas nacho';

   constructor() {
      
   }

   ngOnInit() {
    console.log('ONINIT');
    this.getSillas();
  }

  getSillas() {
    this.rand = Math.floor(Math.random() * 100);
    this.sillasData.getSillas().subscribe((sillas: any) => {
      this.titulo = 'Sillas Esteban';
      console.log('Sillas obtenidas', sillas);
      this.sillas.set(sillas);
    },(error) => {
      console.log('Error al obtener las sillas', error);
      this.sillas.set([]);
    });
  }

  eliminarSilla(silla: Silla) {
    this.sillasData.eliminarSilla(silla.id).subscribe(() => {
      console.log('Silla eliminada', silla);
      this.getSillas();
    },(error) => {
      console.log('Error al eliminar la silla', error);
    });
  }
}
