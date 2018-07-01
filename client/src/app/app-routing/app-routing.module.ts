import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ThumbnailListComponent} from '../thumbnail-list/thumbnail-list.component';
import {ListViewComponent} from '../list-view/list-view.component';

const routes: Routes = [
  {path: 'thumbnail', component: ThumbnailListComponent},
  {path: 'list', component: ListViewComponent},
  { path: '', redirectTo: '/thumbnail', pathMatch: 'full' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
