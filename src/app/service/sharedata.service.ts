import { Injectable } from '@angular/core';
import {BehaviorSubject,Subject} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class SharedataService {

  constructor() { }
  
  public edit:any=''
  public subject= new Subject<any>();
  private msgscr=new BehaviorSubject(this.edit)
  crntmsg=this.msgscr.asObservable()

  chngmsg(msg:any){
    this.msgscr.next(msg)
  
  }
  
}
