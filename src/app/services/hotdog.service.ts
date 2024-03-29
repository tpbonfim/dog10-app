import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotdogService {

  private hotdogCollection:AngularFirestoreCollection;
  private hotdogs:Observable<Object[]>;

  constructor(private db:AngularFirestore) {
    this.hotdogCollection = db.collection('hot-dog')
    this.hotdogs = this.hotdogCollection.snapshotChanges().pipe(
      map(actions =>{
        return actions.map(hotdog =>{
          let dogTemp = hotdog.payload.doc.data()
          return dogTemp
        })
      })
    );
  }
  //retornar a promisse para fora
  public addDog(dog){
    return this.hotdogCollection.add(dog)
  }
  public getDogs(){
    return this.hotdogs
  }
}
