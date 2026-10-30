import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class SillasData {
   private http = inject(HttpClient);
   
   public getSillas() {
    console.log('Getting sillas from API');
    return this.http.get('/api/sillas');
   }

   public eliminarSilla(id: number) {
    console.log('Eliminando silla con id', id);
    return this.http.delete(`/api/sillas/${id}`);
   }
}
