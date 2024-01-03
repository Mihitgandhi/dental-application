import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})

export class GalleryComponent {
  images=[
    {name: '../../../assets/images/clinic.jpg', caption:'Clinic View'},
    {name: '../../../assets/images/smile.jpg', caption:'Smile'},
    {name: '../../../assets/images/implant.jpg', caption:'Implant Architecture'}
  ];
}