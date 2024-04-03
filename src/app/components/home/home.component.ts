import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  images=[
    {name: '../../../assets/images/hd_home1.jpg', caption:'Clinic View'},
    {name: '../../../assets/images/smile.jpg', caption:'Smile'},
    {name: '../../../assets/images/implant.jpg', caption:'Implant Architecture'}
  ];
}
