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
  workingHrs = [
  {day: 'Monday', time: '9:30 AM – 1:30 PM | 5:30 PM – 9:00 PM'},
  {day: 'Tuesday', time: '9:30 AM – 1:30 PM | 5:30 PM – 9:00 PM'},
  {day: 'Wednesday', time: '9:30 AM – 1:30 PM | 5:30 PM – 9:00 PM'},
  {day: 'Thrusday', time: '9:30 AM – 1:30 PM | 5:30 PM – 9:00 PM'},
  {day: 'Friday', time: '9:30 AM – 1:30 PM | 5:30 PM – 9:00 PM'},
  {day: 'Saturday', time: '9:30 AM – 1:30 PM | 5:30 PM – 9:00 PM'},
  {day: 'Sunday', time: '9:30 AM – 1:30 PM'}
  ]
}
