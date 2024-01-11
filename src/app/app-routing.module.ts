import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { DentalServicesComponent } from './components/dental-services/dental-services.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BookAppoinmentComponent } from './components/book-appoinment/book-appoinment.component';

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
        path: 'dental-services',
        component: DentalServicesComponent,
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
