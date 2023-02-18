import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './secure/home/home.component';
import { AboutComponent } from './secure/about/about.component';
import { ContactComponent } from './secure/contact/contact.component';
import { PhotosComponent } from './secure/photos/photos.component';
import { VideoComponent } from './secure/video/video.component';
import { PricingComponent } from './secure/pricing/pricing.component';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './secure/events/events.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'over', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'fotos', component: PhotosComponent },
  { path: 'video', component: VideoComponent },
  { path: 'prijzen', component: PricingComponent },
  { path: 'events', component: EventsComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
