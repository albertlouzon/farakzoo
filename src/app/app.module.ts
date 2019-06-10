import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectImageComponent } from './select-image/select-image.component';
import {MatDialogModule} from "@angular/material";
import { MaterialModule } from './material.module';
import { ModalComponent } from './modal/modal.component';
import {ImageURLService} from './image-url.service';

@NgModule({
  declarations: [
    AppComponent,
    SelectImageComponent,
    ModalComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule,
  ],
  providers: [ImageURLService],
  bootstrap: [AppComponent],
  entryComponents:[ModalComponent, SelectImageComponent,]
})
export class AppModule { }
