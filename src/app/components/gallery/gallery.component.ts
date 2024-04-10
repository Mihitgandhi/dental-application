import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})

export class GalleryComponent {
  images=[
    {name: '../../../assets/images/full_logo.jpg', caption:'Logo'},
    {name: '../../../assets/images/gallary_1.jpg', caption:'Clinic View'},
  ];

  gallary_images=[
    {name: '../../../assets/images/gallary_1.jpg'},
    {name: '../../../assets/images/gallary_2.jpg'},
    {name: '../../../assets/images/gallary_3.jpg'},
    {name: '../../../assets/images/gallary_4.jpg'},
    {name: '../../../assets/images/smile.jpg'},
    {name: '../../../assets/images/surgery.jpg'},
    {name: '../../../assets/images/hd_home1.jpg'},
  ];
}