import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './secure/home/home.component';
import { AboutComponent } from './secure/about/about.component';
import { ContactComponent } from './secure/contact/contact.component';
import { PhotosComponent } from './secure/photos/photos.component';
import { VideoComponent } from './secure/video/video.component';
import { PricingComponent } from './secure/pricing/pricing.component';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './secure/Album/album.component';
import { FirstComponent } from './secure/Album/first/first.component';
import { SecondComponent } from './secure/Album/second/second.component';
import { CoorporateComponent } from './secure/photos/coorporate/coorporate.component';
import { EventsComponent } from './secure/photos/events/events.component';
import { HeadshotsComponent } from './secure/photos/headshots/headshots.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'over', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'fotos', component: PhotosComponent },
  { path: 'video', component: VideoComponent },
  { path: 'prijzen', component: PricingComponent },
  { path: 'album', component: AlbumComponent },
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: 'coorporate', component: CoorporateComponent },
  { path: 'events', component: EventsComponent },
  { path: 'headshots', component: HeadshotsComponent },


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
