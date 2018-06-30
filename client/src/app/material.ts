import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  imports: [MatCardModule, MatListModule, MatIconModule, MatSlideToggleModule],
  exports: [MatCardModule, MatListModule, MatIconModule, MatSlideToggleModule],
})
export class MaterialModule {
}
