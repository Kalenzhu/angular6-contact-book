import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ThumbnailListComponent} from '../thumbnail-list/thumbnail-list.component';
import {ListViewComponent} from '../list-view/list-view.component';
import {AddContactComponent} from '../add-contact/add-contact.component';

const routes: Routes = [
  {path: 'thumbnail', component: ThumbnailListComponent},
  {path: 'list', component: ListViewComponent},
  {path: 'add', component: AddContactComponent},
  {path: '', redirectTo: '/thumbnail', pathMatch: 'full'},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
