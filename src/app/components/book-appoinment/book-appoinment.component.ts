import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  sendData(e:any){
    // console.log("Name is :", this.myName),
    // console.log("Email is :", this.myEmail),
    // console.log("Treatment is :", this.myTreatment),
    // console.log("Phone is :", this.myPhonenum),
    // console.log("Phone is :", this.myAddress)

    e.preventDefault();

    const myName: string = this.myName.trim();
    const myEmail: any = this.myEmail.trim();
    const myTreatment: string = this.myTreatment.trim();
    const myPhonenum: number = this.myPhonenum.trim();
    const myAddress: string = this.myAddress.trim();

    const data: any = {
      myName, myEmail, myTreatment, myPhonenum, myAddress };

      console.log(data);

    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

    this.http.post('http://127.0.0.1:8080/email', JSON.stringify(data), {
      headers: headers
    })

    .subscribe(data => {
      console.log(data);
    });
  
    console.log('Server Received Data');
  }
}