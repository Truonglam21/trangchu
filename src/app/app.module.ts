import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowVideoComponent } from './component/show-video/show-video.component';
import { HttpClientModule  } from '@angular/common/http';
import { AddVideoComponent } from './component/add-video/add-video.component';
import { ListVideoComponent } from './component/list-video/list-video.component';
import { EditVideoComponent } from './component/edit-video/edit-video.component';
@NgModule({
  declarations: [
    AppComponent,
    ShowVideoComponent,
    AddVideoComponent,
    ListVideoComponent,
    EditVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
