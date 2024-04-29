import { Component } from '@angular/core';
import { main } from '@popperjs/core';

@Component({
  selector: 'app-aligners',
  templateUrl: './aligners.component.html',
  styleUrl: './aligners.component.scss'
})
export class AlignersComponent {
  
  lineitems=[
    {main:"Invisible & Stylish : ", sub:"Smile with confidence and style without worrying about wires and metal brackets"},
    {main:"Removable & Portable : ", sub:"Whether you’re eating or traveling, our aligners can be removed, packed, and maintained with ease"},
    {main:"Painless & Comfy : ", sub:"Unlike braces that pull and tug, our aligners are painless and comfortable"},
    {main:"Healthy & Durable : ", sub:"Our aligners are made to last and their removable feature enables you to take better care of your teeth"}
  ]
}
