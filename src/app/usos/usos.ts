import { Component, inject, signal } from '@angular/core';
import { Uso } from '../uso';
import { NgFor, NgIf } from '@angular/common';
import { UsosData } from '../usos-data';

@Component({
  imports: [NgFor, NgIf],
  selector: 'app-usos',
  styleUrl: './usos.css',
  templateUrl: './usos.html',
})
export class Usos {
  usos = signal(<Uso[]>[]);

  usosData = inject(UsosData);

  ngOnInit() {
    console.log('ONINIT USOS');
    this.usosData.getUsos().subscribe((usos: any) => {
      this.usos.set(usos);
    });
  }

}
