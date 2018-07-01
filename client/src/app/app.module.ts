import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import {MaterialModule} from './material';
import { ThumbnailListComponent } from './thumbnail-list/thumbnail-list.component';
import { ListViewComponent } from './list-view/list-view.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ThumbnailComponent,
    ThumbnailListComponent,
    ListViewComponent,
    AddContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
