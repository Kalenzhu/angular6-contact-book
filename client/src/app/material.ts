import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  imports: [MatCardModule, MatListModule, MatIconModule, MatSlideToggleModule, MatToolbarModule, MatButtonModule],
  exports: [MatCardModule, MatListModule, MatIconModule, MatSlideToggleModule, MatToolbarModule, MatButtonModule],
})
export class MaterialModule {
}
