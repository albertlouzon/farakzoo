import { Component, OnInit, Inject, ViewChild, AfterViewInit, EventEmitter} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from '../DialogData';
import {SelectImageComponent} from '../select-image/select-image.component'
import { ImageURLService } from '../image-url.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  // styleUrls: ['./modal.component.css'],
  // providers: [ImageURLService]
})
export class ModalComponent implements OnInit {

  imgURL: string;
  imgURLSubscription: Subscription;
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    public imageURLService: ImageURLService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      console.log('tepu', data)
      // this.imgURL = data.imgURL;
    }

  public event: EventEmitter<any> = new EventEmitter();

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(){
    // console.log("coucou", this.imgURL)
    this.imageURLService.emitDeploymentTitle({url: this.imgURL, valid: true});
    this.close()

  }

  close() {
    this.dialogRef.close();
}

  ngOnInit() {
    console.log('check if opened twice')
    this.imgURLSubscription = this.imageURLService.imgURL$.subscribe(newImgDAta => {
      console.log('inside modal.ts sub, ', newImgDAta)
      this.imgURL = newImgDAta.url;
    })
  }

}