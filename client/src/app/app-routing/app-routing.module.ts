import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ThumbnailListComponent} from '../thumbnail-list/thumbnail-list.component';
import {ListViewComponent} from '../list-view/list-view.component';
import {AddContactComponent} from '../add-contact/add-contact.component';
import {EditContactComponent} from '../edit-contact/edit-contact.component';
import {NotFoundComponent} from '../not-found/not-found.component';

const routes: Routes = [
  {path: 'thumbnail', component: ThumbnailListComponent},
  {path: 'list', component: ListViewComponent},
  {path: 'add', component: AddContactComponent},
  {path: 'edit/:id', component: EditContactComponent},
  {path: '404', component: NotFoundComponent},
  {path: '', redirectTo: '/thumbnail', pathMatch: 'full'},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
