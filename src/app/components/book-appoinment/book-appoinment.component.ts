import { Component } from '@angular/core';

@Component({
  selector: 'app-book-appoinment',
  templateUrl: './book-appoinment.component.html',
  styleUrl: './book-appoinment.component.scss',
})
export class BookAppoinmentComponent {
  myName:string= "";
  myEmail:string= "";
  myTreatment:string= "";
  myPhonenum: any= "";
  myAddress:any="";

  options=[
    "Smile Design", 
    "General consultation", 
    "Bone Loss and Teeth Filling", 
    "Teeth Cleaning and Whitening", 
    "Gum Diseases and Bad Breath", 
    "Toothache and Sensitive Teeth", 
    "Kids Dentistry"
  ]

  selected ="Choose..."
  
  update(e:any){
    this.selected = e.target.value
  }

  onClick(){
    console.log("Name is :", this.myName),
    console.log("Email is :", this.myEmail),
    console.log("Treatment is :", this.myTreatment),
    console.log("Phone is :", this.myPhonenum),
    console.log("Phone is :", this.myAddress)
  }
  
  
}