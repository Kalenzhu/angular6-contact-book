import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import {MaterialModule} from './material';
import { ThumbnailListComponent } from './thumbnail-list/thumbnail-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ThumbnailComponent,
    ThumbnailListComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
