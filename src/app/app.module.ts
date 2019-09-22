import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PhotosService} from './photos.service';
import {HttpClientModule} from '@angular/common/http';
import { DatabindingComponent } from './databinding/databinding.component';
import {FormsModule} from '@angular/forms';
import { DirectivetypesComponent } from './directivetypes/directivetypes.component';
import { RouterModule, Routes } from '@angular/router';
import { PhotolistComponent } from './photolist/photolist.component';
import { AgePipe } from './pipes/age.pipe';

const routes: Routes = [
  {path: '', redirectTo: 'databinding', pathMatch: 'full'},
  {path: 'databinding', component: DatabindingComponent},
  {path: 'directives', component: DirectivetypesComponent},
  {path: 'photolist', component: PhotolistComponent},
  {path: '**', redirectTo: 'databinding'}
];

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    DirectivetypesComponent,
    PhotolistComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot (routes) ],
  providers: [PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
