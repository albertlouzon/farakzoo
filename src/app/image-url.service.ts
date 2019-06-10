import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageURLService {
  private imgURL = new Subject< {url: string, valid: boolean}>();
  imgURL$ = this.imgURL.asObservable();

  emitDeploymentTitle (imgData: {url: string, valid: boolean}) {this.imgURL.next(imgData);
    console.log("emiting imgUrl", imgData)
  }


  constructor() { }
}
