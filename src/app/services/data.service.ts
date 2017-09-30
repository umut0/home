import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {

    public data: Object;
    // public obsData: Observable<Object> = new Observable<Object>();
    public subjectData = new Subject<Object>();

  constructor(private http: Http) { 
      http.get("./assets/data/data.json").subscribe( data => {
          this.data = data.json();
          console.log(this.data);
          this.subjectData.next(this.data);
          // this.obsData.next(data.json());
      })
  }

  getData(): Observable<any> {
      return this.subjectData.asObservable();
  }

}
