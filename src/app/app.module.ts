import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatExpansionModule}  from '@angular/material/expansion'; 

import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AboutComponent } from './secure/about/about.component';
import { PhotosComponent } from './secure/photos/photos.component';
import { PricingComponent } from './secure/pricing/pricing.component';
import { ContactComponent } from './secure/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './secure/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { VideoComponent } from './secure/video/video.component';
import { EventsComponent } from './secure/events/events.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AboutComponent,
    PhotosComponent,
    PricingComponent,
    ContactComponent,
    HomeComponent,
    VideoComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    MatSidenavModule,
    RouterModule,
    NgbModule,
    FlexLayoutModule,
    MatGridListModule,
    MatExpansionModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
