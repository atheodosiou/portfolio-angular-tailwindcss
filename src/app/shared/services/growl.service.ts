import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GrowlData } from '../models/growl.model';

@Injectable({
  providedIn: 'root'
})
export class GrowlService {

  private message$: Subject<GrowlData> = new Subject<GrowlData>();

  constructor() { }

  get onMessage() {
    return this.message$.asObservable();
  }

  public show(message: GrowlData) {
    this.message$.next(message);
  }
}
