import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BookAppoinmentComponent } from './components/book-appoinment/book-appoinment.component';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DentalImplantsComponent } from './components/our-services/dental-implants/dental-implants.component';
import { DentistryComponent } from './components/our-services/dentistry/dentistry.component';
import { CosmeticDentistryComponent } from './components/our-services/cosmetic-dentistry/cosmetic-dentistry.component';
import { EndodonticsComponent } from './components/our-services/endodontics/endodontics.component';
import { AlignersComponent } from './components/our-services/aligners/aligners.component';
import { CrownComponent } from './components/our-services/crown/crown.component';
import { CompleteDenturesComponent } from './components/our-services/complete-dentures/complete-dentures.component';
import { BracesComponent } from './components/our-services/braces/braces.component';
import { BridgesComponent } from './components/our-services/bridges/bridges.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactUsComponent,
    BookAppoinmentComponent,
    FooterComponent,
    DentalImplantsComponent,
    DentistryComponent,
    CosmeticDentistryComponent,
    EndodonticsComponent,
    AlignersComponent,
    CrownComponent,
    CompleteDenturesComponent,
    BracesComponent,
    BridgesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    NgbModule,
    NgbCarouselModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
