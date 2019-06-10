import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from './DialogData';
import { ModalComponent } from './modal/modal.component';
// import { SelectImageComponent } from './select-image/select-image.component';
import { ImageURLService } from './image-url.service';
import { Subscription } from 'rxjs';
import { SelectImageComponent } from './select-image/select-image.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  // providers:[ImageURLService] NIQUE TA MERE PROVIDERS NIQUE TA MERE
})
export class AppComponent implements OnInit{

  imgURLSubscription: Subscription;
  constructor(public dialog: MatDialog, public imageURLService: ImageURLService) {

  }

  @ViewChild(SelectImageComponent, {static: false}) SelectImageData;

  imgURL: any;
  buttonDisabled: boolean;

  ngOnInit( ) {
    this.imgURLSubscription = this.imageURLService.imgURL$.subscribe(newImgDAta => {
      // console.log('FINAL INTERACTION FOR IMG URL, INSIDE APP COMPONENT I HAVE', newImgDAta);
      if(newImgDAta.valid){
        console.log('User saved changes...', newImgDAta);
        this.imgURL = newImgDAta.url;
      }    else {
        console.log('I received new data for image, but the user have not SAVED the changes yet so no update')
      }
    })
  }

  ngAfterViewInit() {
    // this.imgURL = this.SelectImageData.imgURL;
    // this.buttonDisabled = this.SelectImageData.buttonDisabled;

  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;


    dialogConfig.data = {
      imgURL: this.imgURL,
      buttonDisabled: this.buttonDisabled
    }
    this.dialog.open(ModalComponent, dialogConfig);
    // const dialogRef = this.dialog.open(ModalComponent, dialogConfig);
    
    // dialogRef.afterClosed().subscribe(data => {
    //   console.log('Child component\'s event was triggered', data);
    // });

    
    
  }
}