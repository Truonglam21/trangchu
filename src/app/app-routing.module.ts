import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShowVideoComponent } from './component/show-video/show-video.component';
import { ListVideoComponent } from './component/list-video/list-video.component';
import { AddVideoComponent } from './component/add-video/add-video.component';
import { EditVideoComponent } from './component/edit-video/edit-video.component';
const routes: Routes = [
  {path: 'Video', component: ShowVideoComponent},
  {path: 'list',component: ListVideoComponent},
  {path: 'add',component: AddVideoComponent},
  {path: 'edit/:id',component: EditVideoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
