import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BookAppoinmentComponent } from './components/book-appoinment/book-appoinment.component';
import { DentistryComponent } from './components/our-services/dentistry/dentistry.component';
import { AlignersComponent } from './components/our-services/aligners/aligners.component';
import { CompleteDenturesComponent } from './components/our-services/complete-dentures/complete-dentures.component';
import { CosmeticDentistryComponent } from './components/our-services/cosmetic-dentistry/cosmetic-dentistry.component';
import { CrownComponent } from './components/our-services/crown/crown.component';
import { DentalImplantsComponent } from './components/our-services/dental-implants/dental-implants.component';
import { EndodonticsComponent } from './components/our-services/endodontics/endodontics.component';
import { BracesComponent } from './components/our-services/braces/braces.component';
import { BridgesComponent } from './components/our-services/bridges/bridges.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    pathMatch: 'prefix',
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'gallery',
        component: GalleryComponent,
      },
      {
        path: 'our-services/dentistry',
        component: DentistryComponent,
      },
      {
        path: 'our-services/aligners',
        component: AlignersComponent,
      },
      {
        path: 'our-services/braces',
        component: BracesComponent,
      },
      {
        path: 'our-services/bridges',
        component: BridgesComponent,
      },
      {
        path: 'our-services/complete-dentures',
        component: CompleteDenturesComponent,
      },
      {
        path: 'our-services/cosmetic-dentistry',
        component: CosmeticDentistryComponent,
      },
      {
        path: 'our-services/crown',
        component: CrownComponent,
      },
      {
        path: 'our-services/dental-implants',
        component: DentalImplantsComponent,
      },
      {
        path: 'our-services/endodontics',
        component: EndodonticsComponent,
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
      },
      {
        path: 'book-appoinment',
        component: BookAppoinmentComponent,
      },
      { path: '**', redirectTo: 'home' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
