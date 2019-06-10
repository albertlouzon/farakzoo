import { Component, OnInit } from '@angular/core';
import { ImageURLService } from './../image-url.service';

@Component({
  selector: 'app-select-image',
  templateUrl: './select-image.component.html',
    // styleUrls: ['./select-image.component.css']
})
export class SelectImageComponent implements OnInit {

  public imagePath;
  imgURL: any;
  public message: string;
 
  buttonDisabled: boolean = true;
  messageHidden: boolean = true;
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/jpeg|image\/png|image\/gif/) == null) {
      this.messageHidden = false;
      this.message = "File format invalid. Must be of an image type.";
      return;
    } 
    
    this.buttonDisabled = false;
    this.messageHidden = true;
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
      this.ImageURLService.emitDeploymentTitle({url: this.imgURL, valid: false});
    }
  }
  
  constructor(private ImageURLService : ImageURLService) { }

  ngOnInit() {
  }

}
