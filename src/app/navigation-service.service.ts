import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { userDetail } from 'src/models/userDetail.model';
@Injectable({
  providedIn: 'root'
})
export class NavigationServiceService {
  private _dataStream_name = new BehaviorSubject("");
  private _dataStream_icon = new BehaviorSubject("");
  constructor() { };
  getDataStreamName(){
    return this._dataStream_name.asObservable();
  }

  putDataStreamName(data: string){
    this._dataStream_name.next(data);
  }

  getDataStreamIcon(){
    this._dataStream_icon.asObservable();
  }

  putDataStreamIcon(data: string){
    this._dataStream_name.next(data);
  }
}
// data sharing through a service