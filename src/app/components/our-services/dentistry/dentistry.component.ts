import { Component } from '@angular/core';

@Component({
  selector: 'app-dentistry',
  templateUrl: './dentistry.component.html',
  styleUrl: './dentistry.component.scss'
})
export class DentistryComponent {
lineitems=[
  "Helping children chew properly to maintain good nutrition",
  "Involvement in speech development",
  "Helping save space for permanent teeth and guiding them into the correct position",
  "Promoting a healthy smile that helps children feel good",
  "Permitting normal development of the jaw bones and muscles"]

  lineitems1=[
  {main:"Front upper", sub:" will fall at 6 to 8 years of age."},
{main:"Front lower", sub:" will fall at 7 to 9 years of age."},
{main:"Upper and lower back", sub:" teeth will fall from age 11 years to 14 years"}
  ]
}
