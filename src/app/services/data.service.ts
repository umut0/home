import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

    public data: Object;

  constructor(private http: Http) { 
      http.get("./assets/data/data.json").subscribe( data => {
          this.data = data.json();
          console.log(this.data);
      })

  }

}
