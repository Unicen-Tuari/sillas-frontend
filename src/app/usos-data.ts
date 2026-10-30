import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class UsosData {
  private http = inject(HttpClient);

  public getUsos(){
    console.log('Getting usos from API');
    return this.http.get('/api/usos');
  }
}
